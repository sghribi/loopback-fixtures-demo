loopback-fixtures-demo
======================

Demo project for https://github.com/sghribi/loopback-fixtures with **PostgreSQL** database on port 5433 (/!\)

Schema
------

**User** : name (string), birthDate (date), email (string), favoriteNumber (number)
**Group** : name (string), members ([User])


``` bash
git clone https://github.com/sghribi/loopback-fixtures
git clone https://github.com/sghribi/loopback-fixtures-demo
cd loopback-fixtures-demo && npm install
```

In the PostgreSQL CLI, run :

``` SQL
CREATE DATABASE loopback_fixtures_demo ENCODING 'UTF-8';
CREATE USER loopback_fixtures_demo ENCRYPTED PASSWORD 'loopback_fixtures_demo';
GRANT ALL ON DATABASE loopback_fixtures_demo TO loopback_fixtures_demo;
```

Then run migrations :

``` bash
./node_modules/.bin/db-migrate up
```
