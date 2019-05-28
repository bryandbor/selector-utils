import {joinStrings, includesSubstring} from '../strings';

const prefix = 'Selectors | Strings';

describe(`${prefix} | joinStrings`, () => {
  describe('joins values correctly', () => {
    test('default ajoining string', () => {
      const selector = joinStrings();
      expect(selector('This', 'will', 'work, of course.')).toEqual(
        'This will work, of course.'
      );
      expect(selector(7, 'years old')).toEqual('7 years old');
    });

    test('custom ajoining string', () => {
      const selector = joinStrings('.');
      expect(selector('key1', 'thing2', 'other')).toEqual('key1.thing2.other');
    });
  });
});

describe(`${prefix} | includesSubstring`, () => {
  const selector = includesSubstring('ten');

  test('returns true correctly', () => {
    expect(selector('often')).toEqual(true);
    expect(selector('ten')).toEqual(true);
    expect(selector('ten thousand')).toEqual(true);
  });

  test('returns false correctly', () => {
    expect(selector('ent')).toEqual(false);
    expect(selector('t e n')).toEqual(false);
    expect(selector('')).toEqual(false);
  });
});
