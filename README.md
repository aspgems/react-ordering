[![Maintainability](https://api.codeclimate.com/v1/badges/58d5871a74ebd10d350d/maintainability)](https://codeclimate.com/github/aspgems/react-ordering/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/58d5871a74ebd10d350d/test_coverage)](https://codeclimate.com/github/aspgems/react-ordering/test_coverage)
[![Build Status](https://travis-ci.org/aspgems/react-ordering.svg?branch=master)](https://travis-ci.org/aspgems/react-ordering)
[![dependencies Status](https://david-dm.org/aspgems/react-ordering/status.svg)](https://david-dm.org/aspgems/react-ordering)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

If you want to read about Create React App you can do it [here](docs/CREATE_REACT_APP.md)

You can see a live demo [here](https://aspgems.github.io/react-ordering/)

# Install and setup

## Requirements
This project requires:

- [node](https://nodejs.org/es/) (v 8.11.2)

## Install and running
First, you need to install node. The recommended installation is with [nvm](https://github.com/creationix/nvm)
>If you are using `zsh` you can use the [oh-my-zsh plugin for nvm](https://github.com/robbyrussell/oh-my-zsh/blob/master/lib/nvm.zsh)

Then, install npm libraries
```bash
npm install
```

and start your development server with
```bash
npm run start
```
## npm scripts
|script             |description                            |
|-------------------|---------------------------------------|
|`npm run start`    |Starts your dev server at port 3000    |
|`npm test`         |Runs your tests                        |
|`npm lint`         |Runs your linter                       |
|`npm run build`    |Builds the app                         |
|`npm run storybook`|Runs storybook at port 9001            |

# Project structure
This projects tries to follow a modular development approach.

Under `src` folder there is one folder for each modules. Right now we have only two of them:

- **Catalogue**: To deal with everything related with products
- **ShoppingCart**: To deal with the shopping cart (Obvious isn't it?)

Every module follows the following convention:

- It comes with a `config.js` file which holds different configuration params (e.g: namespace, API endpoints, etc.)
- It comes with a `actions.js` file which contains logic which modifies state. This is done using pure functions
- It comes with a `PropTypes.js` file which contains `PropTypes` for the components
- It comes with a `index.js` file which exports every public submodule available from the outside
- It comes with a `__test__` folder which contains test files

# Storybook
This project comes with storybook. Place your stories files together with their related components with a `.stories.js` extension
