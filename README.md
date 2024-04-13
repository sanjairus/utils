# @jrssnjn/utils

Contains one of many more to come helper functions, currently only includes `transform` which transforms dynamic values from a template

```ts
import { transform } from '@jrssnjn/utils/transformer';
import path from 'node:path';

// template file path
const path = path.join('location-of-file', 'welcome.email');

// dynamic values to update
const fieldsToUpdate = { name: 'John Doe', age: '25' };

const updatedData: string = transform(path, fieldsToUpdate);
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install @jrssnjn/utils
```

## Features

- Transforming dynamic values from a template file

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
