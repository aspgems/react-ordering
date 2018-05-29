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
|script                 |description                                                          |
|-----------------------|---------------------------------------------------------------------|
|`npm run start`        |Starts your dev server at port 3000                                  |
|`npm test`             |Runs your tests                                                      |
|`npm lint`             |Runs your linter                                                     |
|`npm run build`        |Builds the app                                                       |
|`npm run storybook`    |Runs storybook at port 9001                                          |
|`npm run start-server` |Runs a json server mocking the API. (Intended to be used from docker)|

# Project structure
This projects tries to follow a modular development approach.

## Components
Under `src` folder there is components folder conaining all the available components. Right now we have only two of them:

- **OrderItem**: Deals with a product in the product list. Contains the button that allows adding it to the shopping cart.
- **ProductItem**: To deal with a product added to the shopping cart. Allows increasing/decreasing quantity as well as removing it from the cart.

Every module follows the following convention:

- It comes with a `<Component name>.js` file which holds the sources for the component.
- It optionally comes with a `<Component name>.css` file which contains the required stylesheet to render the component.
- It comes with a `<Component name>.snapshots.test.js` with the tests for the component.


## API
The api folder contains the required classes to consume data from the backend. Currently only two classes exists:

- **orders.js**: Allows loading, creating or updating orders.
- **products.js**: Allows retrieving the list of available products.

# Docker support:
The project comes with docker-compose support. In order to execute the project you need to first and foremost build the image:

```bash
docker-compose build
```

Now you're ready to execute the application:

```bash
docker-compose up
```

It will start three containers exposing the following services:

- **http://localhost:3000**: React application.
- **http://localhost:3001**: Backend server with a mocked API.
- **http://localhost:9001**: The app' storybook.

# Storybook
This project comes with storybook. Place your stories files together with their related components with a `.stories.js` extension
