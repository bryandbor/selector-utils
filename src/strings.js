/**
 * Selector which joins the values by a given string
 * @param {string} [ajoiningString = ' '] The string which will join each value
 * @returns {Function} The selector which will join all values using the provided joining string
 */
export const joinStrings = (ajoiningString = ' ') => (...values) =>
  values.join(ajoiningString);

/**
 * Selector which checks if the result string contains a substring
 * @param {string} expectedSubstring The substring to be checked for
 * @returns {Function} Selector which returns true if resulting string contains provided substring
 */
export const includesSubstring = expectedSubstring => value =>
  value.includes(expectedSubstring);
