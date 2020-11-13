# Carousel
Image Carousel

# Welcome to the image carousel.

In order to get setup run the following scripts:

1) Install Dependencies: npm install

2) Seeding Script:
  - open mongo instance in terminal: mongo
  - choose database: use carousel
  - clear collection: db.images.remove({})
  - in a seperate terminal: npm run dbSetup

3) Server Start Script: npm start

4) Webpack Script: npm run build

5) Carousel should be rendered to DOM


Testing Script: npm test

Have Fun!

# CRUD API
Create: POST to /products/ to add to carousel.

Read: GET at /products/:product/ to get one product, get at /products to get all products.

Update: PUT at /products/:product/ to update one product in database. Does nothing if the product number is non-existant.

Delete: DELETE at /products/:product/ to delete the product from the database.

# PostgreSQL
To start:
1. sudo service postgresql start
2. sudo -i -u postgres
3. psql
4. Use database: psql databaseName

1. Show database: \l
2. Drop table: DROP TABLE "tableName";
3. Show table: \dt
4. Look inside table: SELECT * FROM "tableName";

To stop:
1. sudo service postgresql stop

# Cassandra
To start:
1. sudo service cassandra start
2. cqlsh

Usage:
1. DESCRIBE keyspaces; show all keyspaces
2. USE keyspace
3. SELECT * FROM tablename;

To stop:
1. sudo service cassandra stop

k6:
sudo k6 run test-module-script.js

Artillery:
sudo artillery run test-module-script.yml
