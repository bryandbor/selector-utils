import equal from 'deep-equal';

const isEqual = (expectedResult, value) =>
  typeof expectedResult !== 'object'
    ? value === expectedResult
    : equal(value, expectedResult, {strict: true});

/**
 * Selector which checks if value matches expected value
 * @param {...any} expectedResult The value with which the result will be compared
 * @returns {boolean} True if values match, false otherwise
 */
export const getIsEqual = expectedResult => (...values) =>
  values.findIndex(value => !isEqual(expectedResult, value)) === -1;

/**
 * Selector which filters all values for only single occurrences
 * @param {...any} values The values being filtered for uniqueness
 * @returns {any[]} Set of values with no repeated values
 */
export const unique = (...values) =>
  values.filter((value, index, arr) => arr.indexOf(value) === index);

/**
 * Selector which checks that all values are defined
 * @param {...any} values All values being checked for definition
 * @returns {boolean} True if all values are defined, false if any value is undefined
 */
export const getIsDefined = (...values) =>
  values.findIndex(value => value === undefined) === -1;
