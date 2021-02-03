# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## 3.0.0 - 2017-10-17

Changed:

* Now extends [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended),
  which turns on the `at-rule-no-unknown` rule.

Added:

* The `number-leading-zero` rule, which value is `never`.
* Tests that check that the valid css doesn’t cause errors or warnings.
* Travis CI config for [running tests](https://travis-ci.com/uploadcare/stylelint-config-uploadcare).
* README: npm and travis shields

Changed:

* README: use the mark version instead of full for the logo of Uploadcare.

## 2.0.0 - 2017-06-20

Removed:

* All rules and code from fork of `stylelint-config-standard`.

Added:

* In exported config now only extends of `stylelint-config-standard`.
* New README, which contain only install and usage explanations.
* New CHANGELOG.
