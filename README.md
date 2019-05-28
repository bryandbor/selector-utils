# @bryandbor/selector-utils

> Utilities for selectors

[![NPM](https://img.shields.io/npm/v/@bryandbor/selector-utils.svg)](https://www.npmjs.com/package/@bryandbor/selector-utils) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Package Size](https://badgen.net/packagephobia/publish/@bryandbor/selector-utils)](https://packagephobia.now.sh/result?p=%40bryandbor%2Fselector-utils) [![Weekly downloads](https://badgen.net/npm/dw/@bryandbor/selector-utils)](https://www.npmjs.com/package/@bryandbor/selector-utils)

## Install

```bash
npm install --save @bryandbor/selector-utils
```

## Usage

_The use of the [reselect](https://github.com/reduxjs/reselect) library is suggested, but not required._

```js
import {createSelector} from 'reselect';
import {
  trueIfAllAreTrue,
  trueIfAnyAreTrue,
  not,
  sum,
  getIsGreaterThanOrEqual,
  getIsEqual,
  joinStrings,
  // There are many more utils exported from this library, this is just a subset used for demo purposes
} from '@bryandbor/selector-utils';

export const getNumberOfFriends = createSelector(
  getFriendsFromSchool,
  getFriendsFromWork,
  getFamilyFriends,
  sum,
);

export const getHasLotsOfFriends = createSelector(
  getNumberOfFriends,
  getIsGreaterThanOrEqual(25)
);

export const getIsFirstNameSilly = createSelector(
  getFirstName,
  getIsEqual('Bozo')
);

export const getIsLastNameGreat = createSelector(
  getLastName,
  getIsEqual('Powers')
);

export const getIsNameCool = createSelector(
  not(getIsFirstNameSilly),
  getIsLastNameGreat,
  trueIfAnyAreTrue
);

export const getIsCoolPerson = createSelector(
  getHasLotsOfFriends,
  getIsNameCool,
  trueIfAllAreTrue
);

export const getCoolPersonGreeting = createSelector(
  'Hello,'
  getFirstName,
  'you are officially cool!'
);
```

## License

MIT © [bryandbor](https://github.com/bryandbor)
