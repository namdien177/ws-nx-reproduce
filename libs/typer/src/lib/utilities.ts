export type Nullish = null | undefined;

export type IsNullish<T> = T | Nullish;

export type ValueOf<T extends Record<string, unknown> | Array<unknown>> =
  T extends Array<unknown> ? T[number] : T[keyof T];

export type NotNullish<T> = Exclude<T, Nullish>;
