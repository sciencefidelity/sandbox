# Challenge

This repo is a collection of simple environments in various languages that interest me. I use these templates for test driven development of functions to solve coding challenges or for use as utilities in apps.

There are a few things that were essential to the process, both the app and the test suite sould run uninterrupted, and update on save. The test suite output should be highlighted and semantic.

# TypeScript

The TypeScript suite uses the built in `ts-node-dev` to re-run the app on save and it uses `jest` for its tests:

Commands:

```shell
# run project
yarn ts-node-dev ./index.ts

# start the app
yarn dev

# run the tests
yarn jest

# start the test suite
yarn test

# check test coverage
yarn coverage

# lint project
yarn lint

# auto fix lint errors
yarn fix

# format code
yarn format
```
