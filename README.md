# React Redux Scaffold

## Goals
* Learn more about configuring React and Redux projects
* Learn about Babel
* Learn about Webpack configuration
* Practice continuous integration with Heroku and Travis

The goal of this project was basically to practice configuring some sort of node, webpack, es6 project. 

I did not necessarily intend for this to be for production or scalable apps. Mainly just a proof of concept for myself. 

Use at your own risk!

## To Do
* Need examples of other react and redux piecies such as actions, reducers, etc
* Would like to build a back end component for persisting in a database
* Need more testing/testing examples
* Have one webpack file and break out duplicate configuration code
* Autoprefixer and post css processing
* Add Github page
* Explore other modules and configs

## Usage
### Setup
dotenv
### Testing
```
npm run test
```
```
npm run test:watch
```
### Linting 
To lint the whole project:
```
npm run lint
```
To lint styles:
```
npm run lint:styles
```
To lint application source code:
```
npm run lint:src
```
To lint your tests:
```
npm run lint:test
```

### Building

For local and development builds use:
``` 
npm run build:dev
```
For production builds use:
```
npm run build
```

### Running

For development use:
``` 
npm run start:dev
```
For local production use:
* Make sure you have run ```npm run build``` first!
```
npm run start
```

## Details

### Structure

### Webpack.dev.config vs Webpack.prod.config

### Server

This is a basic express server I setup for my deploys to heroku. It basically serves static files from the public folder. 

``` 
npm start
```

### Dependencies

## Credits
http://survivejs.com/webpack/introduction/
http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html
 
