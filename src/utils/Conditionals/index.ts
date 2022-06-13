/**
 * Find out whether value is null
 * @param  {any} val to be validated
 * @returns {boolean} true if value is null, else false
 */
const isNull = (val: any) => val === null;

/**
 * Find out whether type of value is undefined
 * @param  {any} val to be validated
 * @returns {boolean} true if value is null, else false
 */
const isUndefined = (val: any) => typeof val === 'undefined';

/**
 * Find out whether value is null or undefined, therefore "missing"
 * @param  {any} val to be validated
 * @returns {boolean} true if value is null or undefined, else false
 */
const isMissing = (val: any) => isNull(val) || isUndefined(val);

/**
 * Find out whether value is not null and not undefined, therefore "present"
 * @param  {any} val to be validated
 * @returns {boolean} true if value is not null and not undefined, else false
 */
const isPresent = (val: any) => !isMissing(val);

/**
 * Find out whether value is of type Boolean
 * @param  {any} val to be validated
 * @returns {boolean} true if value is of type Boolean, else false
 */
const isBoolean = (val: Boolean) => isPresent(val) && typeof val === 'boolean';

/**
 * Find out whether value is of type Array
 * @param  {any} val to be validated
 * @returns {boolean} true if value is of type Array, else false
 */
const isArray = (val: any) => isPresent(val) && Array.isArray(val);

/**
 * Find out whether value is of type Object
 * @param  {any} val to be validated
 * @returns {boolean} true if value is of type Object, else false
 */
const isObject = (val: Object) => isPresent(val) && typeof val === 'object' && !isArray(val);

/**
 * Find out whether value is of type String
 * @param  {any} val to be validated
 * @returns {boolean} true if value is of type String, else false
 */
const isString = (val: string) => isPresent(val) && typeof val === 'string';

/**
 * Find out whether value is of type Number
 * @param  {any} val to be validated
 * @returns {boolean} true if value is of type Number, else false
 */
const isNumber = (val: string) => isPresent(val) && typeof val === 'number' && !Number.isNaN(val);

/**
 * Find out whether value is of consist of Digit only
 * @param  {any} val to be validated
 * @returns {boolean} true if value is consist of Digit only, else false
 */
const isDigit = (val: string) => {
  const digitPattern = /^\d+$/;
  return isPresent(val) && digitPattern.test(val);
};

/**
 * Find out whether value is of type Number and is Integer
 * @param  {any} val to be validated
 * @returns {boolean} true if value is of type Number, else false
 */
const isInteger = (val: string) => isNumber(val) && Number.isInteger(val);

/**
 * Find out whether value 1 and value 2 are equal
 * @param  {any} val1 to be validated
 * @param  {any} val2 to be validated
 * @returns {boolean} true if value 1 and value 2 are equal, else false
 */
const isEqual = (val1: any, val2: any) => val1 === val2;

/**
 * Find out whether value is of type String, and has 0 characters
 * @param  {any} val to be validated
 * @returns {boolean} true if value is of type String and has 0 characters, else false
 */
const isEmptyString = (val: string) => isString(val) && isEqual(val.length, 0);

/**
 * Find out whether value is of type Array and has no elements
 * @param  {any} val to be validated
 * @returns {boolean} true if value is of type Array and has no elements, else false
 */
const isEmptyArray = (val: Array<any>) => isArray(val) && isEqual(val.length, 0);

/**
 * Find out whether value is of type Object and has no keys,
 * including non-enumerable properties, and symbols
 * @param  {any} val to be validated
 * @returns {boolean} true if value is of type Object and is "empty", else false
 */
const isEmptyObject = (val: Object) => {
  if (isObject(val)) {
    const propertyNames = Object.getOwnPropertyNames(val);
    const symbolKeys = Object.getOwnPropertySymbols(val);

    const keysLength = propertyNames.length + symbolKeys.length;

    return isEqual(keysLength, 0);
  }
  return false;
};

export default {
  isNull,
  isUndefined,
  isMissing,
  isPresent,
  isBoolean,
  isArray,
  isString,
  isNumber,
  isDigit,
  isInteger,
  isEmptyString,
  isEmptyArray,
  isEmptyObject,
  isEqual
};
