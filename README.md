# hubcare

[![codecov](https://codecov.io/gh/fga-eps-mds/2019.1-hubcare-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/fga-eps-mds/2019.1-hubcare-plugin)
[![Maintainability](https://api.codeclimate.com/v1/badges/f4a2a07020f27cc7d324/maintainability)](https://codeclimate.com/github/fga-eps-mds/2019.1-hubcare-plugin/maintainability)
[![dependencies Status](https://david-dm.org/fga-eps-mds/2019.1-hubcare-plugin/status.svg)](https://david-dm.org/fga-eps-mds/2019.1-hubcare-plugin)
[![devDependencies Status](https://david-dm.org/fga-eps-mds/2019.1-hubcare-plugin/dev-status.svg)](https://david-dm.org/fga-eps-mds/2019.1-hubcare-plugin?type=dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/fga-eps-mds/2019.1-hubcare-plugin.svg)](http://isitmaintained.com/project/fga-eps-mds/2019.1-hubcare-plugin "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/fga-eps-mds/2019.1-hubcare-plugin.svg)](http://isitmaintained.com/project/fga-eps-mds/2019.1-hubcare-plugin "Percentage of issues still open")

The Hubcare is an open-source project to manage if a repository is good or not to a newcomer, either a passing visitor, someone who looks for contributions or someone who just is interested in the software. If you are interested in the documentation, just go to [Hubcare Docs](https://cjjcastro.gitlab.io/2019-1-hubcare-docs)

This repository is the Hubcare's browser extension.

## Getting started

Before anything, you need to install [docker]() and [docker-compose](). After installing those, you'll be able to start contributing to this project.

### Commands

#### Run aplication

This command run a development chrome extension.

```bash
docker-compose up
```

#### Execute others commands 

If you want to execute commands inside your docker container, use:

```bash
docker-compose exec hubcareplugin <command>
```
example:
```bash
docker compose exec hubcareplugin npm install
```

## Node commads
### Install

```bash
npm install
```
### Development

```bash
npm run dev chrome
npm run dev firefox
npm run dev opera
npm run dev edge
```
### Build

```bash
npm run build chrome
npm run build firefox
npm run build opera
npm run build edge
```

### Tests

```bash
    npm test
```

### Environment

The build tool also defines a variable named `process.env.NODE_ENV` in your scripts. 


## Other repos that are part of this project

* [Docs](https://github.com/fga-eps-mds/2019.1-hubcare-docs/)
* [Backend](https://github.com/fga-eps-mds/2019.1-hubcare-api/)