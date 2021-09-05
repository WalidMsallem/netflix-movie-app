## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone git@github.com:WalidMsallem/artist-platform-demo.git` 
3.  Move to the appropriate directory: `cd artist-platform-demo`.
 
4.  Run `npm run install` in order to install all dependencies. 
````
$ npm install
````
5.  Run `npm start`.
````
$ npm start
````
 
 _At this point the frontend will run under `http://localhost:3000`._
 
Now you're ready to rumble!

## For testing
In order to test the project, please be sure that you copy a new token into src/config/token.ts 
 
## Contributor
Developpeur : Walid M'sallem ( Full stack developpeur ) 
Contact : walidmsallem@gmail.com 

## functionality

Logged User can search for a list of artists, get details for one artist, create artist, and create a report for a specific artist

## Features

This frontend manages application state using **Redux**, makes it
immutable with  **Immer* and keeps access performant  **reselect**.

For managing asynchronous flows (e.g. logging in) we use **redux-saga**.
.
**Antd**  as a design system, 
