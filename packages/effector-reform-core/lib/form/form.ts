import {
  Effect,
  attach,
  createEffect,
  createEvent,
  createStore,
  sample,
  EventCallable,
} from 'effector';
import {
  AnySchema,
  PartialRecursive,
  UserFormSchema,
  copyGroup,
  prepareFieldsSchema,
} from '../fields';
import type {
  CreateFormOptions,
  ErrorsSchemaPayload,
  FormErrors,
  FormType,
  FormValues,
  SyncValidationFn,
} from './types';
import {
  setFormValues,
  mapSchema,
  clearFormErrors,
  setFormErrors,
} from './mapper';
import { resetForm } from './helpers/reset';
import { contractAdapter, isContract } from './helpers';

interface FormInnerMeta {
  /**
   * need to call submittedAndValidatedEvent after "validated" event
   */
  needSav: boolean;
}

export function createForm<T extends AnySchema>(options: CreateFormOptions<T>) {
  const {
    schema,
    validation = (() => null) as unknown as SyncValidationFn<
      UserFormSchema<UserFormSchema<T>>
    >,
    validationStrategies = ['submit', 'change', 'blur', 'focus'],
    clearOuterErrorsOnSubmit = validationStrategies.includes('submit'),
  } = options;

  const fields = copyGroup(prepareFieldsSchema(schema));
  const {
    $errors,
    $values,
    $isValid,
    $api,
    focused,
    blurred,
    addBatchTask,
    metaChanged,
  } = mapSchema(fields);

  const $isDirty = createStore(false);
  const $innerMeta = createStore<FormInnerMeta>({ needSav: false });

  type Fields = typeof fields;
  type Errors = FormErrors<Fields>;
  type Values = FormValues<Fields>;

  const clearOuterErrorsFx = attach({
    source: $api,
    effect: (api) => clearFormErrors(api, addBatchTask, 'outer'),
  });

  const clearInnerErrorsFx = attach({
    source: $api,
    effect: (api) => clearFormErrors(api, addBatchTask, 'inner'),
  });

  const resetFx = attach({
    source: $api,
    effect: (api) => resetForm(api, addBatchTask),
  });

  const setValuesFx = attach({
    source: $api,
    effect: (api, values: any) => setFormValues(values, api, addBatchTask),
  });

  const setErrorsFx = attach({
    source: $api,
    effect: (api, errors: any) =>
      setFormErrors(errors, api, addBatchTask, 'inner', true),
  });

  const setValues = createEvent<Values>('<form set values>');
  const setPartialValues = createEvent<PartialRecursive<Values>>(
    '<form set partial values>',
  );

  const setErrors = createEvent<ErrorsSchemaPayload>('<form set errors>');

  const clear = createEvent('<form full clear>');
  const clearOuterErrors = createEvent('<form clear outer errors>');

  const changed = createEvent<FormValues<Fields>>('<form changed>');
  const errorsChanged = createEvent<Errors>('<form errors changed>');

  const submit = createEvent<void>('<form submit>');
  const submitted = createEvent<FormValues<Fields>>('<form submitted>');

  const validate = createEvent<void>('<form validate>');
  const validated = createEvent<Values>('<form validated>');
  const validationFailed = createEvent<Values>('<validation failed>');
  const validatedAndSubmitted = createEvent<Values>(
    '<form validated and submitted>',
  );

  const changeInnerMeta = createEvent<Partial<FormInnerMeta>>();

  const reset = createEvent('<form reset>');

  const preparedValidationFn = isContract(validation)
    ? contractAdapter(validation)
    : validation;

  const validateFx = createEffect(preparedValidationFn) as Effect<
    Values,
    PartialRecursive<Errors> | null,
    Error
  >;

  const $isValidationPending = validateFx.pending;

  sample({
    clock: changeInnerMeta,
    source: $innerMeta,
    fn: (innerMeta, changedParams) => ({ ...innerMeta, ...changedParams }),
    target: $innerMeta,
  });

  const uniqueValidationStrategies = [...new Set(validationStrategies)];
  for (const strategy of uniqueValidationStrategies) {
    switch (strategy) {
      case 'submit': {
        sample({
          clock: submitted,
          target: [
            validate,
            changeInnerMeta.prepend(() => ({ needSav: true })),
          ],
        });

        break;
      }
      case 'focus': {
        sample({
          clock: focused,
          target: validate,
        });

        break;
      }
      case 'blur': {
        sample({
          clock: blurred,
          target: validate,
        });

        break;
      }
      case 'change': {
        sample({
          clock: changed,
          target: validate,
        });

        break;
      }
    }
  }

  if (!uniqueValidationStrategies.includes('submit')) {
    sample({
      clock: submitted,
      source: {
        isValid: $isValid,
        isValidationPending: $isValidationPending,
      },
      filter: ({ isValid, isValidationPending }) =>
        isValid && !isValidationPending,
      fn: (_, values) => values,
      target: validatedAndSubmitted,
    });
  }

  sample({
    clock: reset,
    target: resetFx,
  });

  sample({
    clock: $values,
    target: changed,
  });

  sample({
    clock: $errors,
    target: errorsChanged,
  });

  sample({
    clock: [setValues, setPartialValues],
    target: setValuesFx,
  });

  sample({
    clock: setErrors,
    target: setErrorsFx,
  });

  sample({
    clock: $values,
    fn: () => true,
    target: $isDirty,
  });

  sample({
    clock: submit,
    source: $values,
    target: submitted,
  });

  sample({
    clock: clearOuterErrors,
    target: clearOuterErrorsFx,
  });

  if (clearOuterErrorsOnSubmit) {
    sample({
      clock: submit,
      target: clearOuterErrors,
    });
  }

  sample({
    clock: validate,
    source: $values,
    target: validateFx,
  });

  sample({
    clock: validateFx.done,
    filter: ({ result }) => !result,
    fn: ({ params }) => params,
    target: validated,
  });

  sample({
    clock: validated,
    target: clearInnerErrorsFx,
  });

  sample({
    clock: validateFx.doneData as EventCallable<any>,
    filter: Boolean,
    target: [
      setErrors,
      validationFailed,
      changeInnerMeta.prepend(() => ({ needSav: false })),
    ],
  });

  sample({
    clock: validated,
    source: $innerMeta,
    filter: ({ needSav }) => needSav,
    fn: (_, values) => values,
    target: [
      validatedAndSubmitted,
      changeInnerMeta.prepend(() => ({ needSav: false })),
    ],
  });

  return {
    $errors,
    $values,
    $isDirty,
    $isValid,

    $isValidationPending,

    fields,
    metaChanged,

    changed,
    errorsChanged,

    submit,
    submitted,

    reset,
    clear,

    validate,
    validated,
    validationFailed,
    validatedAndSubmitted,

    setValues,
    setErrors,

    setPartialValues,

    '@@unitShape': () => ({
      errors: $errors,
      values: $values,
      isValidationPending: $isValidationPending,

      isDirty: $isDirty,
      isValid: $isValid,

      submit,
      validate,
      reset,
      clear,

      setValues,
      setErrors,

      setPartialValues,
    }),
  } as FormType<Fields, Values, Errors>;
}
