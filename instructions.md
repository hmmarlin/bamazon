#Week of 12 HW: Node.js & MySQL

### Copy & Paste the below into MySQL Workbench:
```
CREATE DATABASE bamazon;

CREATE TABLE products (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    dept_name VARCHAR(100) NOT NULL, 
    price INTEGER(10) NOT NULL, 
    quantity INTEGER(10) NOT NULL,
    
    PRIMARY KEY (id)
);
```