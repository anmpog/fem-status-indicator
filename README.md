# fem-status-indicator
Small app for tracking who is or is not using a shared FEM account.


To run locally, a current installation of nodejs is required. I prefer to use homebrew for
installing packages, though you may prefer to install node another way. Using homebrew, the
command is:

`brew install node`

After installing node and downloading this project, navigate to directory and run `NPM install` in 
project root. After dependencies are downloaded/installed, run command "npm run dev" to start app locally.

You will also need to run mongodb server using the `mongod` daemon:
`mongod --dbpath=/data`
(In my home directory on my machine, I have a directory `.mongodb-data` that stores my databases - so 
I run the command `mongod --dbpath ~/.mongodb-data` to run my mongodb server locally.) The mongodb client
can be run using the command `mongo` in a separate tab in your shell.

See the following link for information on starting up a mongodb server:
https://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/

I also used a .env file that held only two variables - one for a PORT on which to run the application,
and the other a URI for the mongodb instance. I used the following key=value pair for local development:
`MONGODB_URL = 'mongodb://localhost:27017/fem-state-db'`
This has been added to the db.js file that configures the database connection so it should be redundant
to add this in an .env file, but feel free to if you'd like!
