## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
 
2.  Clone this repo using `git clone `

````
$  --
````

3.  Move to the appropriate directory: `cd  --`.

4. Install frontend dependencies and run the project.
````
$ cd client 
$ npm install
$ npm start
````

5.  4. Install backend dependencies and run the project.
````
$ cd mock-backend  
$ npm install
$ npm start
````
 
 _At this point the frontend will run under `http://localhost:3000` and the backend/api will run under `http://localhost:5000`._
 
Now you're ready to rumble!

## Contributor
Developpeur : Walid M'sallem ( Full stack developpeur ) 
Contact : walidmsallem@gmail.com 

## Features

This frontend manages application state using **Redux**, makes it
immutable with  **Immer* and keeps access performant  **reselect**.

For managing asynchronous flows (e.g. logging in) we use **redux-saga**.

For routing, we use **react-router** *connected-react-router**.

**Antd**  as a design system, 

we are using a mock backend for you to make requests (**it has been modified compared to the original repository**), [docs](mock-backend/README.md)


