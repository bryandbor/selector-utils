/**
 * Selector which returns true if, and only if, all arguments are truthy
 * @returns {boolean} True if condition is met, false otherwise
 */
export const trueIfAllAreTrue = (...args) =>
  args.findIndex(result => !result) === -1;

/**
 * Selector which false if any arguments are falsy
 * @returns {boolean} True if condition is met, false otherwise
 */
export const falseIfAnyAreFalse = trueIfAllAreTrue; // pseudonym

/**
 * Selector which returns false if, and only if, all arguments are falsy
 * @returns {boolean} True if condition is met, false otherwise
 */
export const falseIfAllAreTrue = (...args) =>
  args.findIndex(result => !result) !== -1;

/**
 * Selector which returns true if any arguments are falsy
 * @returns {boolean} True if condition is met, false otherwise
 */
export const trueIfAnyAreFalse = falseIfAllAreTrue; // pseudonym

/**
 * Selector which returns true if, and only if, all arguments are falsy
 * @returns {boolean} True if condition is met, false otherwise
 */
export const trueIfAllAreFalse = (...args) =>
  args.findIndex(result => Boolean(result)) === -1;

/**
 * Selector which returns false if any arguments are truthy
 * @returns {boolean} True if condition is met, false otherwise
 */
export const falseIfAnyAreTrue = trueIfAllAreFalse; // pseudonym

/**
 * Selector which returns false if, and only if, all arguments are false
 * @returns {boolean} True if condition is met, false otherwise
 */
export const falseIfAllAreFalse = (...args) =>
  args.findIndex(result => Boolean(result)) !== -1;

/**
 * Selector which returns true if any arguments are truthy
 * @returns {boolean} True if condition is met, false otherwise
 */
export const trueIfAnyAreTrue = falseIfAllAreFalse; // pseudonym

/**
 * Returns the (boolean) opposite of the wrapped selectors' result
 * @param {Function} selector - selector whose result will be negated
 * @returns {boolean} - returns the opposite of the result of the wrapped selector when called with any/all arguments
 */
export const not = selector => (...args) => !selector(...args);

/**
 * Selector which returns true if arguments exactly match the expected; false otherwise
 * @param {any[]} order The expected order of arguments exact values
 * @returns {Function} Selector which determines if results match in order, count, value, and type
 */
export const trueIfResultsMatchExact = mixedValues => (...args) =>
  // Results must be equal length
  mixedValues.length === args.length &&
  // ...and each element must match exactly
  mixedValues.findIndex((val, index) => args[index] !== val) === -1;

/* eslint-disable eqeqeq */
/**
 * Selector which returns true if arguments match the expected result (by truthy/falsy values only); false otherwise
 * @param {any[]} order The expected order of arguments exact values
 * @returns {Function} Selector which determines if results match in order, count, and loose value
 */
export const trueIfResultsMatch = mixedValues => (...args) =>
  // Results must be equal length
  mixedValues.length === args.length &&
  // ...and each element must match loosely
  mixedValues.findIndex(
    (val, index) => Boolean(args[index]) !== Boolean(val)
  ) === -1;
/* eslint-enable eqeqeq */
