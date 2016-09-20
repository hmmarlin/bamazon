CREATE DATABASE bamazon;

CREATE TABLE products (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    dept_name VARCHAR(100) NOT NULL, 
    price INTEGER(10) NOT NULL, 
    quantity INTEGER(10) NOT NULL,
    
    PRIMARY KEY (id)
);

SELECT * FROM bamazon.products;

INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("lightbublbs", "home", 17, 30)

INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("toilet paper", "home", 10, 300)

INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("AAA batteries", "office", 15, 45)

INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("shakespeare", "books", 39, 27)

INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("headlamp", "sporting goods", 15, 80)