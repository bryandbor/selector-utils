import {getIsEqual, unique, getIsDefined} from '../basic';

const prefix = 'Selectors | Basic';

describe(`${prefix} | getIsEqual`, () => {
  test('returns true correctly', () => {
    const falseBoolSelector = getIsEqual(false);
    expect(falseBoolSelector(false)).toEqual(true);
    const trueBoolSelector = getIsEqual(true);
    expect(trueBoolSelector(true)).toEqual(true);

    const stringSelector = getIsEqual('abc');
    expect(stringSelector('abc')).toEqual(true);

    const intSelector = getIsEqual(7);
    expect(intSelector(7)).toEqual(true);

    const floatSelector = getIsEqual(4 / 3);
    expect(floatSelector(4 / 3)).toEqual(true);

    const objArr = [1, 7];
    const objObj = {test: 'value'};
    const objSelector = getIsEqual({objArr, objObj, str: 'abc', boo: true});
    expect(objSelector({objArr, objObj, str: 'abc', boo: true})).toEqual(true);

    const arrSelector = getIsEqual([objArr, objArr, 16, objObj, true]);
    expect(arrSelector([objArr, objArr, 16, objObj, true])).toEqual(true);
  });

  test('returns false correctly', () => {
    const falseBoolSelector = getIsEqual(false);
    expect(falseBoolSelector(true)).toEqual(false);
    const trueBoolSelector = getIsEqual(true);
    expect(trueBoolSelector(false)).toEqual(false);

    const stringSelector = getIsEqual('abc');
    expect(stringSelector('')).toEqual(false);
    expect(stringSelector('cba')).toEqual(false);
    expect(stringSelector('abcd')).toEqual(false);

    const intSelector = getIsEqual(7);
    expect(intSelector(0)).toEqual(false);
    expect(intSelector(70)).toEqual(false);

    const floatSelector = getIsEqual(4 / 3);
    expect(floatSelector(1.33)).toEqual(false);

    const objArr = [1, 7];
    const objObj = {test: 'value'};
    const objSelector = getIsEqual({objArr, objObj, str: 'abc', boo: true});
    expect(objSelector({objArr, objObj, str: 'abc', boo: false})).toEqual(
      false
    );
    expect(objSelector({objArr, objObj, str: 'abcd', boo: true})).toEqual(
      false
    );
    expect(
      objSelector({objArr: [...objArr, true], objObj, str: 'abc', boo: true})
    ).toEqual(false);
    expect(
      objSelector({
        objArr,
        objObj: {...objObj, other: 'thing'},
        str: 'abc',
        boo: true,
      })
    ).toEqual(false);

    const arrSelector = getIsEqual([objArr, objArr, 16, objObj, true]);
    expect(arrSelector([objArr, objArr, 16, objObj, false])).toEqual(false);
    expect(arrSelector([objArr, objArr, 17, objObj, true])).toEqual(false);
    expect(arrSelector([[...objArr, 'c'], objArr, 16, objObj, true])).toEqual(
      false
    );
    expect(
      arrSelector([objArr, {...objArr, other: 'thing'}, 16, objObj, true])
    ).toEqual(false);
  });
});

describe(`${prefix} | unique`, () => {
  test('filters values', () => {
    expect(unique(0, 1, 2)).toEqual([0, 1, 2]);
    expect(unique(0, 1, 2, 2)).toEqual([0, 1, 2]);
    expect(unique(0, 0, 1, 2, 2, 3)).toEqual([0, 1, 2, 3]);

    expect(unique('a', 'b')).toEqual(['a', 'b']);
    expect(unique('a', 'a', 'b')).toEqual(['a', 'b']);
    expect(unique('a', 'a', 'b', 'c', 'b')).toEqual(['a', 'b', 'c']);
  });
});

describe(`${prefix} | getIsDefined`, () => {
  test('returns true correctly', () => {
    expect(getIsDefined(true)).toEqual(true);
    expect(getIsDefined(false)).toEqual(true);
    expect(getIsDefined('')).toEqual(true);
    expect(getIsDefined(1)).toEqual(true);
    expect(getIsDefined(0)).toEqual(true);

    expect(getIsDefined(true, false, '', 1, 0, [], {}, null)).toEqual(true);
  });

  test('returns false correctly', () => {
    expect(getIsDefined(undefined)).toEqual(false);
    expect(getIsDefined(undefined, undefined)).toEqual(false);
    expect(getIsDefined(true, undefined)).toEqual(false);
    expect(
      getIsDefined(true, false, '', undefined, 1, 0, [], {}, null)
    ).toEqual(false);
  });
});
