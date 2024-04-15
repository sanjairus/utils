# @jrssnjn/utils

Package containing useful helper functions.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install @jrssnjn/utils
```

# Interpolate

Reads data from a file and transforms dynamic values from the said file.

```ts
import { interpolate } from '@jrssnjn/utils/interpolate';
import path from 'node:path';

// <p>Welcome {title} {name}!</p>

// template file path
const path = path.join('location-of-file', 'welcome.email');

// dynamic values to update
const fieldsToUpdate = { title: 'Mr.', name: 'John Doe' };

const updatedData: string = interpolate(path, fieldsToUpdate);
console.log(updatedData); // // <p>Welcome Mr. John Doe!</p>
```

## Contributing

- Make a branch for your feature / bug-fix
- Commit your changes
- Add unit tests for your change if applicable & execute existing tests
- Pull Remote branch and rebase
- Push branch to remote
- Submit a pull request

### Running Tests

To run the test suite, first install the dependencies, then run `npm test`:

```console
$ npm install
$ npm test
```

## People

The author of `@jrssnjn/utils` is [Jairus San Juan](https://github.com/sanjairus)

## License

[ISC](LICENSE)
