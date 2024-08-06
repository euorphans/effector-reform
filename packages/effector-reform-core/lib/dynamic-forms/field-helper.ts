import { FormType } from '../form';
import { UserFormSchema } from '../fields';
import { createEvent, sample } from 'effector';

export function field<Fields extends UserFormSchema<any>>(
  form: FormType<Fields, any, any>,
  fieldKey: string,
) {
  const event = createEvent<any>();

  sample({
    clock: form.changed,
    filter: (...props: any[]) => {
      console.log(...props);
      return true;
    },
    target: event,
  });

  return event;
}
