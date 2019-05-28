import {
  sum,
  difference,
  product,
  quotient,
  getIsGreaterThan,
  getIsGreaterThanOrEqual,
  getIsLessThan,
  getIsLessThanOrEqual,
} from '../arithmetic';

const prefix = 'Selectors | Arithmetic';

describe(`${prefix} | sum`, () => {
  test('sums values', () => {
    expect(sum(2, 3)).toEqual(5);
    expect(sum(100, 50, 150, 500, 20, 30)).toEqual(850);
  });
});

describe(`${prefix} | difference`, () => {
  test('performs subtraction correctly', () => {
    expect(difference(10, 5)).toEqual(5);
    expect(difference(50, 10, 5, 20, 1)).toEqual(14);
  });
});

describe(`${prefix} | product`, () => {
  test('multiplies values', () => {
    expect(product(5, 7)).toEqual(35);
    expect(product(2, 3, 3, 5, 10)).toEqual(900);
  });
});

describe(`${prefix} | quotient`, () => {
  test('performs division correctly', () => {
    expect(quotient(10, 5)).toEqual(2);
    expect(quotient(5000, 10, 5, 20, 1)).toEqual(5);
  });
});

describe(`${prefix} | getIsGreaterThan`, () => {
  test('returns true correctly', () => {
    const selector = getIsGreaterThan(10);
    expect(selector(Number.POSITIVE_INFINITY)).toEqual(true);
    expect(selector(1000)).toEqual(true);
    expect(selector(11)).toEqual(true);
  });

  test('returns false correctly', () => {
    const selector = getIsGreaterThan(10);
    expect(selector(10)).toEqual(false);
    expect(selector(9)).toEqual(false);
    expect(selector(0)).toEqual(false);
    expect(selector(Number.NEGATIVE_INFINITY)).toEqual(false);
  });
});

describe(`${prefix} | getIsGreaterThanOrEqual`, () => {
  test('returns true correctly', () => {
    const selector = getIsGreaterThanOrEqual(10);
    expect(selector(Number.POSITIVE_INFINITY)).toEqual(true);
    expect(selector(1000)).toEqual(true);
    expect(selector(11)).toEqual(true);
    expect(selector(10)).toEqual(true);
  });

  test('returns false correctly', () => {
    const selector = getIsGreaterThanOrEqual(10);
    expect(selector(9)).toEqual(false);
    expect(selector(0)).toEqual(false);
    expect(selector(Number.NEGATIVE_INFINITY)).toEqual(false);
  });
});

describe(`${prefix} | getIsLessThan`, () => {
  test('returns true correctly', () => {
    const selector = getIsLessThan(10);
    expect(selector(9)).toEqual(true);
    expect(selector(0)).toEqual(true);
    expect(selector(Number.NEGATIVE_INFINITY)).toEqual(true);
  });

  test('returns false correctly', () => {
    const selector = getIsLessThan(10);
    expect(selector(Number.POSITIVE_INFINITY)).toEqual(false);
    expect(selector(1000)).toEqual(false);
    expect(selector(11)).toEqual(false);
    expect(selector(10)).toEqual(false);
  });
});

describe(`${prefix} | getIsLessThanOrEqual`, () => {
  test('returns true correctly', () => {
    const selector = getIsLessThanOrEqual(10);
    expect(selector(10)).toEqual(true);
    expect(selector(9)).toEqual(true);
    expect(selector(0)).toEqual(true);
    expect(selector(Number.NEGATIVE_INFINITY)).toEqual(true);
  });

  test('returns false correctly', () => {
    const selector = getIsLessThanOrEqual(10);
    expect(selector(Number.POSITIVE_INFINITY)).toEqual(false);
    expect(selector(1000)).toEqual(false);
    expect(selector(11)).toEqual(false);
  });
});
