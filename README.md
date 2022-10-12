# Tech Blog 

# Description
This app is a deployed blog site that allows uers to publish blog posts as well as login, logout, signup, add comments, add blog posts, edit blog posts and delete blog posts.

# Installation
Setup:

(1) Fork the repo, (2) Clone the forked repo locally, (3) Run "npm install" (to install the dependencies).
Setup the Database Schema:

(1) Update or add an .env file. Include the fields below in the .env file. Note that the .env variables are used in the conf folder, connection.js file.

DB_NAME="blog_db"
DB_USER=""
DB_PASSWORD=""
Seed the Database:

Run Server: From the root directory, run either "npm run watch" to start nodeman or "node server.js".
Seed Database: (a) To create the database, run "SOURCE ./db/schema.sql" in mySQL, (b) To create the database tables, from the terminal, run "npm run start" or "npm run watch", (c) To seed the database tables, run "npm run seed" or "node ./seeds/index.js".

# Usage
This app is a deployed blog site that allows uers to publish blog posts.


