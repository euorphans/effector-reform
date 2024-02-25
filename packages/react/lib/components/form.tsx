import { FormType } from '@effector-reform/core';
import { useUnit } from 'effector-react';
import React, { FC } from 'react';

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  model: FormType<any, any, any>;
}

export const Form: FC<FormProps> = ({ model, ...props }) => {
  const { submit } = useUnit({ submit: model.submit });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      {...props}
    />
  );
};
