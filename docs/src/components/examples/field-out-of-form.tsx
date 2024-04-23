import { createField, createForm } from '@effector-reform/core';
import { useEffect, useState } from 'react';
import { useField, useForm } from '@effector-reform/react';

const name = createField<string>('', { forkOnCreateForm: false });

const form = createForm({
  schema: {
    name,
  },
});

export function FieldOutOfForm() {
  const field = useField(name);
  const { fields } = useForm(form);

  const [message, setMessage] = useState<string>(':(');

  useEffect(() => {
    if (field.value === 'Edward') {
      setMessage('Nice!');
    } else {
      setMessage(':(');
    }
  }, [field.value]);

  return (
    <>
      <p>type "Edward"</p>

      <input
        value={fields.name.value}
        onChange={(e) => fields.name.onChange(e.currentTarget.value)}
      />

      <p>message: {message}</p>
    </>
  );
}
