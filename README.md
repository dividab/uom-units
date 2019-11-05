# uom-units

[![npm version][version-image]][version-url]
[![travis build][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![code style: prettier][prettier-image]][prettier-url]
[![MIT license][license-image]][license-url]

Predefined units for use with the uom package

## Introduction

This package has units that can be used with the [uom](https://www.npmjs.com/package/uom) package.

## Installation

`npm install --save uom-units`

## How to use

The main export from this package is the `Units` module that contains all the defined quantities and units.

Here is an example how to use the defined units for conversion:

```js
import { Amount } from "uom";
import { Units } from "uom-units";

const amount = Amount.create(10, Units.Meter);
const inch = Amount.valueAs(Units.Inch, amount);
```

## How to develop

Create a PR for addition or changes. Please update the changelog's "unreleased" section with your changes in your PR.

## How to publish

Don't forget to update the changelog before publishing. Then run:

```
yarn version --patch
yarn version --minor
yarn version --major
```

[version-image]: https://img.shields.io/npm/v/uom-units.svg?style=flat
[version-url]: https://www.npmjs.com/package/uom-units
[travis-image]: https://travis-ci.com/dividab/uom-units.svg?branch=master&style=flat
[travis-url]: https://travis-ci.com/dividab/uom-units
[codecov-image]: https://codecov.io/gh/dividab/uom-units/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/dividab/uom-units
[license-image]: https://img.shields.io/github/license/dividab/uom-units.svg?style=flat
[license-url]: https://opensource.org/licenses/MIT
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat
[prettier-url]: https://github.com/prettier/prettier
