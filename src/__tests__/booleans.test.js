import {
  trueIfAllAreTrue,
  falseIfAnyAreFalse,
  falseIfAllAreTrue,
  trueIfAnyAreFalse,
  trueIfAllAreFalse,
  falseIfAnyAreTrue,
  falseIfAllAreFalse,
  trueIfAnyAreTrue,
  not,
  trueIfResultsMatchExact,
  trueIfResultsMatch,
} from '../booleans';

const prefix = 'Selectors | Booleans';

describe(`${prefix} | trueIfAllAreTrue`, () => {
  describe('single arg', () => {
    test('returns true correctly', () => {
      expect(trueIfAllAreTrue(true)).toEqual(true);
    });
    test('returns false correctly', () => {
      expect(trueIfAllAreTrue(false)).toEqual(false);
    });
  });

  describe('many args', () => {
    test('returns true correctly', () => {
      expect(trueIfAllAreTrue(true, true)).toEqual(true);
      expect(trueIfAllAreTrue(true, true, true)).toEqual(true);
      expect(trueIfAllAreTrue(true, true, true, true)).toEqual(true);
      expect(trueIfAllAreTrue(true, true, true, true, true)).toEqual(true);
    });

    test('returns false correctly', () => {
      expect(trueIfAllAreTrue(false, true)).toEqual(false);
      expect(trueIfAllAreTrue(true, false, true)).toEqual(false);
      expect(trueIfAllAreTrue(true, false, false, true)).toEqual(false);
      expect(trueIfAllAreTrue(false, true, false, true, false)).toEqual(false);
    });
  });
});

describe(`${prefix} | falseIfAnyAreFalse`, () => {
  describe('single arg', () => {
    test('returns true correctly', () => {
      expect(falseIfAnyAreFalse(true)).toEqual(true);
    });
    test('returns false correctly', () => {
      expect(falseIfAnyAreFalse(false)).toEqual(false);
    });
  });

  describe('many args', () => {
    test('returns true correctly', () => {
      expect(falseIfAnyAreFalse(true, true)).toEqual(true);
      expect(falseIfAnyAreFalse(true, true, true)).toEqual(true);
      expect(falseIfAnyAreFalse(true, true, true, true)).toEqual(true);
      expect(falseIfAnyAreFalse(true, true, true, true, true)).toEqual(true);
    });

    test('returns false correctly', () => {
      expect(falseIfAnyAreFalse(false, true)).toEqual(false);
      expect(falseIfAnyAreFalse(true, false, true)).toEqual(false);
      expect(falseIfAnyAreFalse(true, false, false, true)).toEqual(false);
      expect(falseIfAnyAreFalse(false, true, false, true, false)).toEqual(
        false
      );
    });
  });
});

describe(`${prefix} | falseIfAllAreTrue`, () => {
  describe('single arg', () => {
    test('returns false correctly', () => {
      expect(falseIfAllAreTrue(true)).toEqual(false);
    });
    test('returns true correctly', () => {
      expect(falseIfAllAreTrue(false)).toEqual(true);
    });
  });

  describe('many args', () => {
    test('returns false correctly', () => {
      expect(falseIfAllAreTrue(true, true)).toEqual(false);
      expect(falseIfAllAreTrue(true, true, true)).toEqual(false);
      expect(falseIfAllAreTrue(true, true, true, true)).toEqual(false);
      expect(falseIfAllAreTrue(true, true, true, true, true)).toEqual(false);
    });

    test('returns true correctly', () => {
      expect(falseIfAllAreTrue(false, true)).toEqual(true);
      expect(falseIfAllAreTrue(true, false, true)).toEqual(true);
      expect(falseIfAllAreTrue(true, false, false, true)).toEqual(true);
      expect(falseIfAllAreTrue(false, true, false, true, false)).toEqual(true);
    });
  });
});

describe(`${prefix} | trueIfAnyAreFalse`, () => {
  describe('single arg', () => {
    test('returns false correctly', () => {
      expect(trueIfAnyAreFalse(true)).toEqual(false);
    });
    test('returns true correctly', () => {
      expect(trueIfAnyAreFalse(false)).toEqual(true);
    });
  });

  describe('many args', () => {
    test('returns false correctly', () => {
      expect(trueIfAnyAreFalse(true, true)).toEqual(false);
      expect(trueIfAnyAreFalse(true, true, true)).toEqual(false);
      expect(trueIfAnyAreFalse(true, true, true, true)).toEqual(false);
      expect(trueIfAnyAreFalse(true, true, true, true, true)).toEqual(false);
    });

    test('returns true correctly', () => {
      expect(trueIfAnyAreFalse(false, true)).toEqual(true);
      expect(trueIfAnyAreFalse(true, false, true)).toEqual(true);
      expect(trueIfAnyAreFalse(true, false, false, true)).toEqual(true);
      expect(trueIfAnyAreFalse(false, true, false, true, false)).toEqual(true);
    });
  });
});

describe(`${prefix} | trueIfAllAreFalse`, () => {
  describe('single arg', () => {
    test('returns true correctly', () => {
      expect(trueIfAllAreFalse(false)).toEqual(true);
    });
    test('returns false correctly', () => {
      expect(trueIfAllAreFalse(true)).toEqual(false);
    });
  });

  describe('many args', () => {
    test('returns true correctly', () => {
      expect(trueIfAllAreFalse(false, false)).toEqual(true);
      expect(trueIfAllAreFalse(false, false, false)).toEqual(true);
      expect(trueIfAllAreFalse(false, false, false, false)).toEqual(true);
      expect(trueIfAllAreFalse(false, false, false, false, false)).toEqual(
        true
      );
    });

    test('returns false correctly', () => {
      expect(trueIfAllAreFalse(true, false)).toEqual(false);
      expect(trueIfAllAreFalse(false, true, false)).toEqual(false);
      expect(trueIfAllAreFalse(false, true, true, false)).toEqual(false);
      expect(trueIfAllAreFalse(true, false, true, false, false)).toEqual(false);
    });
  });
});

describe(`${prefix} | falseIfAnyAreTrue`, () => {
  describe('single arg', () => {
    test('returns true correctly', () => {
      expect(falseIfAnyAreTrue(false)).toEqual(true);
    });
    test('returns false correctly', () => {
      expect(falseIfAnyAreTrue(true)).toEqual(false);
    });
  });

  describe('many args', () => {
    test('returns true correctly', () => {
      expect(falseIfAnyAreTrue(false, false)).toEqual(true);
      expect(falseIfAnyAreTrue(false, false, false)).toEqual(true);
      expect(falseIfAnyAreTrue(false, false, false, false)).toEqual(true);
      expect(falseIfAnyAreTrue(false, false, false, false, false)).toEqual(
        true
      );
    });

    test('returns false correctly', () => {
      expect(falseIfAnyAreTrue(true, false)).toEqual(false);
      expect(falseIfAnyAreTrue(false, true, false)).toEqual(false);
      expect(falseIfAnyAreTrue(false, true, true, false)).toEqual(false);
      expect(falseIfAnyAreTrue(true, false, true, false, false)).toEqual(false);
    });
  });
});

describe(`${prefix} | falseIfAllAreFalse`, () => {
  describe('single arg', () => {
    test('returns false correctly', () => {
      expect(falseIfAllAreFalse(false)).toEqual(false);
    });
    test('returns true correctly', () => {
      expect(falseIfAllAreFalse(true)).toEqual(true);
    });
  });

  describe('many args', () => {
    test('returns false correctly', () => {
      expect(falseIfAllAreFalse(false, false)).toEqual(false);
      expect(falseIfAllAreFalse(false, false, false)).toEqual(false);
      expect(falseIfAllAreFalse(false, false, false, false)).toEqual(false);
      expect(falseIfAllAreFalse(false, false, false, false, false)).toEqual(
        false
      );
    });

    test('returns true correctly', () => {
      expect(falseIfAllAreFalse(true, false)).toEqual(true);
      expect(falseIfAllAreFalse(false, true, false)).toEqual(true);
      expect(falseIfAllAreFalse(false, true, true, false)).toEqual(true);
      expect(falseIfAllAreFalse(true, false, true, false, false)).toEqual(true);
    });
  });
});

describe(`${prefix} | trueIfAnyAreTrue`, () => {
  describe('single arg', () => {
    test('returns true correctly', () => {
      expect(trueIfAnyAreTrue(true)).toEqual(true);
    });
    test('returns false correctly', () => {
      expect(trueIfAnyAreTrue(false)).toEqual(false);
    });
  });

  describe('many args', () => {
    test('returns false correctly', () => {
      expect(trueIfAnyAreTrue(true, false)).toEqual(true);
      expect(trueIfAnyAreTrue(false, true, false)).toEqual(true);
      expect(trueIfAnyAreTrue(false, true, true, false)).toEqual(true);
      expect(trueIfAnyAreTrue(true, false, true, false, false)).toEqual(true);
    });

    test('returns false correctly', () => {
      expect(trueIfAnyAreTrue(false, false)).toEqual(false);
      expect(trueIfAnyAreTrue(false, false, false)).toEqual(false);
      expect(trueIfAnyAreTrue(false, false, false, false)).toEqual(false);
      expect(trueIfAnyAreTrue(false, false, false, false, false)).toEqual(
        false
      );
    });
  });
});

describe(`${prefix} | not`, () => {
  test('negates selector result', () => {
    const selector = jest.fn().mockReturnValue(true);

    let negatedSelector;
    expect(() => (negatedSelector = not(selector))).not.toThrow();

    const args = [true, false, true, true, false];

    expect(negatedSelector(...args)).toEqual(false);
    expect(selector).toHaveBeenCalledWith(...args);
    selector.mockClear();

    selector.mockReturnValue(false);
    expect(negatedSelector(...args)).toEqual(true);
    expect(selector).toHaveBeenCalledWith(...args);
  });
});

describe(`${prefix} | trueIfResultsMatchExact`, () => {
  const expectedMatch = [true, false, true, true, false];

  test('returns true correctly', () => {
    let selector;
    expect(
      () => (selector = trueIfResultsMatchExact([...expectedMatch]))
    ).not.toThrow();
    expect(selector(...expectedMatch)).toEqual(true);
  });

  test('returns false correctly', () => {
    const selector = trueIfResultsMatchExact([...expectedMatch]);

    // No arguments
    expect(selector()).toEqual(false);

    // Single agument missing
    expect(selector(...expectedMatch.slice(1))).toEqual(false);
    expect(
      selector(...expectedMatch.slice(0, expectedMatch.length - 2))
    ).toEqual(false);

    // Extra argument
    expect(selector(...expectedMatch, true)).toEqual(false);

    // Single value does not match
    expect(
      selector(
        ...expectedMatch.slice(0, expectedMatch.length - 2),
        !expectedMatch[4]
      )
    ).toEqual(false);

    // No values match
    expect(selector(...expectedMatch.map(val => !val))).toEqual(false);
  });
});

describe(`${prefix} | trueIfResultsMatch`, () => {
  const expectedMatch = [true, false, true, true, false];

  test('returns true correctly', () => {
    let selector;
    expect(
      () => (selector = trueIfResultsMatch([...expectedMatch]))
    ).not.toThrow();

    // Testing mixed truthy/falsy values in similar order
    expect(selector(true, null, 1, 'abc', false)).toEqual(true);
    expect(selector(true, undefined, [], {}, 0)).toEqual(true);
  });

  test('returns false correctly', () => {
    const selector = trueIfResultsMatch([...expectedMatch]);

    // No arguments
    expect(selector()).toEqual(false);

    // Single agument missing
    expect(selector(...expectedMatch.slice(1))).toEqual(false);
    expect(
      selector(...expectedMatch.slice(0, expectedMatch.length - 2))
    ).toEqual(false);

    // Extra argument
    expect(selector(...expectedMatch, true)).toEqual(false);

    // Single value does not match
    expect(
      selector(
        ...expectedMatch.slice(0, expectedMatch.length - 2),
        !expectedMatch[4]
      )
    ).toEqual(false);

    // No values match
    expect(selector(...expectedMatch.map(val => !val))).toEqual(false);
  });
});
