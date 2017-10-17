# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

### Changed

* Now extends [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended),
  which turns on the `at-rule-no-unknown` rule.

### Added

* The `number-leading-zero` rule, which value is `never`.
* Tests that check that the valid css doesn’t cause errors or warnings.

## 2.0.0 - 2017-06-20

### Removed

* Remove all rules and code from fork of `stylelint-config-standard`.

### Added

* In exported config now only extends of `stylelint-config-standard`.
* New README, which contain only install and usage explanations.
* New CHANGELOG.
