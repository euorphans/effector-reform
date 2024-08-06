import { expect, test, vi } from 'vitest';
import { allSettled, createEffect, createEvent, fork, sample } from 'effector';
import { createForm } from '../../lib';
import { field } from '../../lib/dynamic-forms/field-helper';

test('field helper can be used as clock', async () => {
  const scope = fork();
  const form = createForm({ schema: { a: '' } });
  const mockedFn = vi.fn(() => {});

  const fx = createEffect(mockedFn);

  const genderChanged = createEvent();

  sample({
    clock: field(form, 'a'),
    target: fx,
  });

  sample({
    clock: genderChanged,
    target: field(form, 'gender'),
  });

  await allSettled(form.setValues, { scope, params: { a: '123' } });

  expect(mockedFn).toBeCalledTimes(1);
});
