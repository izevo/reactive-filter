# reactive-filter
A library of reactive filter data.

## Install

```
npm i reactive-fitler
```

## Import

```
import { filterArray } from 'reactive-fitler';

// Or

const { filterArray } = require('reactive-fitler');
```

## Usage

```

const array = ['a', 1, 'b', 2, 3];

const filtered = filterArray(array, v => typeof v === 'number'); // [1, 2, 3]

filtered.splice(1, 1); 
// filtered: [1, 3]
// return: [2]
// array: ['a', 1, 'b', 3]

```

### Array Method

- ✅ push
- ✅ pop
- ✅ shift
- ✅ unshift
- ✅ splice
- ✅ sort
- ✅ fill
