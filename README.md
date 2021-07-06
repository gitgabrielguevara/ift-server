# Simple MERN Auth Codealongs

This is a very simple MERN auth setup using jwts and a custum auth middleware in express to authenticate users. Passport is not used simply to better illustrate the auth flow. 

Although the client and server are both in the repo for simplicity, they should be separate repos in practice for a decoupled app deployment.

Start with server-steps.md to build the express backend.

Move onto client-steps.md to build the react app.

## Setting up the solution code:

Here are the steps to set up the solution code if you fork and clone this repo.

### Set up the server

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
* run `nodemon` in the `./server` folder to start the server

### Set up the client

* `touch .env.local` in the `./client` folder.
* add the following to the `.env.local` file:
```
# backend server url
REACT_APP_SERVER_URL=http://localhost:3001
```
* run `npm i` in `./client`
* start the react app with `npm run start`
