DROP DATABASE IF EXISTS cupcakes_db;
CREATE DATABASE cupcakes_db;
USE cupcakes_db;

CREATE TABLE cupcakes (
    id INTEGER(11) AUTO INCREMENT;
    cupcake_name VARCHAR(200) NOT NULL;
    devoured BOOLEAN NOT NULL;
    PRIMARY KEY (id)
);

