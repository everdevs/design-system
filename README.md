# Evernest Design System

## [Documentation][docs]

[![MIT license][license-badge]][license]
[![Coverage][coverage-badge]][codacy]
[![Grade][grade-badge]][codacy]

This is the contributor documentation for the `@everdevs` mono-repository.
For user docs see the [Documentation][docs].

### Build

Building the repository allows deploying the generated static page. This is usually run in our CD
pipeline.

```bash
yarn build
```

### Develop

This project uses [storybook](https://storybook.js.org/).

Several steps ensure that everything has been linked and set up correctly. The following script will
ensure that everything works "out of the box".

```bash
yarn dev
```

### Setup

This project requires various configurations to be generated. To make sure everything has been set up
correctly you can run the following script (you don't need these steps when you run `yarn dev`).

```bash
yarn setup
```

### Test

We use [Jest](https://jestjs.io/) with [Enzyme](https://enzymejs.github.io/enzyme/) for testing.

Tests can be run in each package (add required scripts to your package). Per default you can run
`yarn test:watch` and `yarn test:update`.

To run all tests you can use the root scripts:

```bash
yarn test
## Update snapshots (https://jestjs.io/docs/en/snapshot-testing#updating-snapshots)
# yarn test -u
```

### Add new packages (atomic components)

Adding new packages can be a tedious task of copy & paste followed by renaming of files and
identifiers. To make it easier to create new packages we added a script that does the job for you.
It is similar to `lerna create <package-name>` but uses a custom template instead.

```
Usage
  $ yarn add-component <input>

Options
  --atomic, -a  Atomic type of component

Examples
  $ yarn add-component "My Component" --atomic atoms
```

After adding a new package, run `yarn bootstrap` to link it.

[docs]: https://everdevs.github.io/design-system/
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge
[license]: https://github.com/everdevs/design-system/blob/master/LICENSE
[coverage-badge]: https://img.shields.io/codacy/coverage/860c9800f40a4d438de3e5e7241de72f?style=for-the-badge
[grade-badge]: https://img.shields.io/codacy/grade/860c9800f40a4d438de3e5e7241de72f?style=for-the-badge
[codacy]: https://app.codacy.com/gh/everdevs/design-system/dashboard
