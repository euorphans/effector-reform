import {
  FieldBatchedPayload,
  FieldBatchedSetter,
  FieldError,
} from '../../fields';
import { Event, EventCallable } from 'effector';

export type Node = any;

export type BasePathApi = {
  reset: () => void;

  clearInnerError: () => void;
  clearOuterError: () => void;

  setInnerError: (error: FieldError) => void;
  setOuterError: (error: FieldError) => void;

  setValue: EventCallable<any>;

  batchedSetValue: <T>(info: FieldBatchedSetter<T>) => void;
  batchedSetInnerError: (error: FieldBatchedSetter<FieldError>) => void;
  batchedSetOuterError: (error: FieldBatchedSetter<FieldError>) => void;
  batchedReset: (info: FieldBatchedPayload) => void;
};

export type ArrayFieldPathApi = {
  type: 'array-field';

  clearValuesMemory: () => void;
  clearMemory: (withField?: boolean) => void;

  batchedClear: (info: FieldBatchedPayload) => void;

  changed: Event<any>;
} & BasePathApi;

export type PrimitiveFieldPathApi = {
  type: 'primitive-field';

  clearMemory: (withField?: boolean) => void;
  changed: Event<any>;
} & BasePathApi;

export type PathApi = ArrayFieldPathApi | PrimitiveFieldPathApi;

export type FormApi = Record<string, PathApi>;
