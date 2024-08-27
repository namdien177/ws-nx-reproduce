import type { Nullish } from "./utilities";

export function isNullish<T = unknown>(
	val: T,
): val is Extract<T, null | undefined> {
	return val === null || val === undefined;
}

/**
 * Silent the typescript when we know the variable is not nullish.
 * @param val
 * @param throwable
 */
export const notNullish: <R>(
	val: R,
	throwable?: true,
) => asserts val is Exclude<R, Nullish> = (val, throwable) => {
	if (throwable && isNullish(val)) {
		throw {
			error: "asset_non_nullish",
			value: val,
		};
	}
};

export const assertType: <R>(
	value: unknown,
	validator?: (v: unknown) => never,
) => asserts value is R = (value, validator) => {
	if (validator) {
		return validator(value);
	}
};

export function onNotNullish<T, P, E = null>(
	value: T,
	thenDo: (safeValue: T) => P,
	elseDo?: () => E,
) {
	if (value !== null && value !== undefined) {
		return thenDo(value);
	}

	if (elseDo) {
		return elseDo();
	}

	return null;
}
