/**
 * Selector which sums all values together
 * @param {...number} values The values which should be summed
 * @returns {number} Sum of all values
 */
export const sum = (...values) => values.reduce((sum, val) => sum + val, 0);

/**
 * Selector which subtracts all other values from the first
 * @param  {number} initialValue The value from which all other values will be subtracted
 * @param  {...number} values The values to be subtracted from the initial value
 * @returns {number} The difference between the initial values and all others
 */
export const difference = (initialValue, ...values) =>
  initialValue - sum(...values);

/**
 * Selector which multiplies all values together and returns the result
 * @param {...number} values The values which will be multplied together
 * @returns {number} The product of all values
 */
export const product = (...values) =>
  values.reduce((product, val) => product * val, 1);

/**
 * Selector which subtracts all other values from the first
 * @param  {number} initialValue The value from which all other values will be subtracted
 * @param  {...number} values The values to be subtracted from the initial value
 * @returns {number} The quotient of the initial values divided by all subsequent values
 */
export const quotient = (initialValue, ...values) =>
  initialValue / product(...values);

/**
 * Selector which checks if value is greater than expected value
 * @param {number} expectedResult The value with which the result will be compared
 * @returns {boolean} True if value is greater than expected, false otherwise
 */
export const getIsGreaterThan = expectedResult => value =>
  value > expectedResult;

/**
 * Selector which checks if value is greater than expected value
 * @param {number} expectedResult The value with which the result will be compared
 * @returns {boolean} True if value is greater than or equal to expected, false otherwise
 */
export const getIsGreaterThanOrEqual = expectedResult => value =>
  value >= expectedResult;

/**
 * Selector which checks if value is less than expected value
 * @param {number} expectedResult The value with which the result will be compared
 * @returns {boolean} True if value is less than expected, false otherwise
 */
export const getIsLessThan = expectedResult => value => value < expectedResult;

/**
 * Selector which checks if value is less than expected value
 * @param {number} expectedResult The value with which the result will be compared
 * @returns {boolean} True if value is less than or equal to expected, false otherwise
 */
export const getIsLessThanOrEqual = expectedResult => value =>
  value <= expectedResult;
