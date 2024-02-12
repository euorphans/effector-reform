import { Event, EventCallable, Store } from "effector";
import { PrimaryValue } from "../primary-field";

export const arrayFieldSymbol = Symbol('array-field');

export type ArrayFieldItem = {
    [K: string]: PrimaryValue | ArrayFieldItem | ArrayFieldItem[];
}

export type PushPayload<T extends ArrayFieldItem> = T | T[];
export type UnshiftPayload<T extends ArrayFieldItem> = T | T[];
export type SwapPayload = { indexA: number; indexB: number; };
export type MovePayload = { from: number; to: number; };
export type InsertOrReplacePayload<T extends ArrayFieldItem> = { index: number; value: T | T[] };
export type RemovePayload = { index: number };

export interface ArrayFieldApi<T extends ArrayFieldItem> {
    push: EventCallable<PushPayload<T>>;
    swap: EventCallable<SwapPayload>;
    move: EventCallable<MovePayload>;
    insert: EventCallable<InsertOrReplacePayload<T>>;
    unshift: EventCallable<UnshiftPayload<T>>;
    remove: EventCallable<RemovePayload>;
    pop: EventCallable<void>;
    replace: EventCallable<InsertOrReplacePayload<T>>;

    pushed: Event<{ params: PushPayload<T>, result: ArrayFieldItem[] }>;
    swapped: Event<{ params: SwapPayload, result: ArrayFieldItem[] }>;
    moved: Event<{ params: MovePayload, result: ArrayFieldItem[] }>;
    inserted: Event<{ params: InsertOrReplacePayload<T>, result: ArrayFieldItem[] }>;
    unshifted: Event<{ params: UnshiftPayload<T>, result: ArrayFieldItem[] }>;
    removed: Event<{ params: RemovePayload, result: ArrayFieldItem[] }>;
    popped: Event<ArrayFieldItem[]>;
    replaced: Event<{ params: InsertOrReplacePayload<T>, result: ArrayFieldItem[] }>;
}

export interface ArrayField<T extends ArrayFieldItem> extends ArrayFieldApi<T> {
    type: ArrayFieldType;

    $values: Store<T[]>;

    forkOnCompose: boolean;
    fork: (options?: CreateArrayFieldOptions) => ArrayField<T>;
}

export interface CreateArrayFieldOptions {
    forkOnCompose?: boolean;
}

export type ArrayFieldType = typeof arrayFieldSymbol;
