# ![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Intro to MERN Auth Codealong Lessons

This is a very simple MERN auth setup using jwts (json web tokens) and a custom auth middleware in express to authenticate users. 

Passport is not used simply to better illustrate the auth flow. 

Although the client and server are both in the repo for simplicity, they should be separate repos in practice for a decoupled app deployment.

TODO: add link to te deployed version of this app. 

## Getting started

First, do the [Auth Research Lab](https://github.com/WDI-SEA/auth-research-lab), before beginning to build this app. 

Start with [README](./server/README.md) in the server folder to build the express backend. 

TODO: Add a link to a postman collection that can be used to test the API

Move onto the client [README](./client/README.md) to build the react app.

Once the app is complete, move onto the [stretch goals](./stretch-goals.md)

## Setting up the solution code

The Solution code is here on the main branch of this repo, so you can use it as a reference during the lesson, clone it down and set it up, or use it as a template for an app.

Here are the steps to set up the solution code if you fork and clone this repo.

### Set up the server

* cd in to the `server` folder
* `touch .env` file in the `./server` folder.
* add the following to the `.env` file:
```
# Server port
PORT=3001
# URI for the database -- this can be an atlas URI too
MONGODB_URI=mongodb://localhost/mernAuth
# jwt secret for signing json web tokens -- can be any string
JWT_SECRET="mysecretmessage"
```
* run `npm i` in `./server` to install the required packages
* run `nodemon` or `node .` in the `./server` folder to start the server

### Set up the client

* `touch .env.local` in the `./client` folder.
* add the following to the `.env.local` file:
```
# backend server url
REACT_APP_SERVER_URL=http://localhost:3001
```
* run `npm i` in `./client` to install the required packages
* start the react app with `npm run start`
* navigate to [localhost:3000](http://localhost:3000) to see the application

---

## Licensing

1. All content is licensed under a [CC-BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.