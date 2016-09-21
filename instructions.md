#Week of 12 HW: Node.js & MySQL

### Create your database in MySQL Workbench
Copy & paste the below code into MySQL workbench.
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
### Import the file products.csv to your table
