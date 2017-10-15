# m3-Alcamech todoapp

Simple todoapp to practice and learn Model–View–Controller (MVC) software architectural pattern, Basic CRUD functionality ( Create, Read, Update, Delete ) and REST API.
 - Back-End made with NodeJS, ExpressJS and MongoDB (with Mongoose and Bluebird)
 - Front-End made with Angular 4, bootstrap, ng-boostrap, font-awesome (icons)

## Architecture (todoapp-api)
  - Data — This Layer is the MongoDB Models or Mongoose Models
  - Services — This layer is going to execute atomic CRUD operations on the models
  - Controller — This Layer is going to control the request body parsing, validating, checking , responding and Error returning actions.
  - API — This layer is a very simple mapping layer. Where specific api endpoints will be mapped to the Controller Functions.

## Database Setup

Download and install MongoDB.
Make sure that the database is running at `127.0.0.1:27017`

Run `sudo mongod` to start the database service

## Project Setup

Now run `cd todoapp-api` to go inside the back-end directory

Run `npm install` to install all the dependencies.

Run `npm install -g nodemon` to install Nodemon Globally.

Run `npm start` to run the NodeJS Server.

Now run `cd todoapp-angular` to go inside the front-end directory

Run `npm install` to install all the dependencies.

Run `ng serve` to run the NG Development Server.

Go to `http://localhost:4200`
