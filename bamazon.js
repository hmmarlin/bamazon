var mysql = require('mysql');
var inquirer = require('inquirer');
var AsciiTable = require('ascii-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "kittens", //Your password
    database: "bamazon"
})
var toBuy;
var numUnits;

connection.connect(function(err) {
    if (err) throw err;
    console.log()
    var welcomeTable = new AsciiTable()
    welcomeTable.setBorder('*')
        .setHeading('Welcome')
        .addRow('TO BAMAZON!')

    console.log(welcomeTable.toString())
    startShopping();
    // console.log("connected as id " + connection.threadId);
})

var startShopping = function() {
    connection.query('SELECT * FROM products', function(err, res) {
        if (err) throw err;
        var table = new AsciiTable('BAMAZON STOREFRONT')
        table.setHeading('ID', 'Product', 'Price')
        for (var i = 0; i < res.length; i++) {
            table.addRow(res[i].id, res[i].product_name, '$' + res[i].price);
        }
        console.log(table.toString())
        askCustomer();
    })
}

var askCustomer = function() {
    connection.query('SELECT * FROM products', function(err, val) {
        inquirer.prompt([{
            name: "item",
            message: "Enter the ID of the item you'd like to purchase.",
            validate: function(value) {
                if (isNaN(value) == false && parseInt(value) > 0) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "qty",
            message: "Enter the number of units you'd like to purchase",
            validate: function(value) {
                if (isNaN(value) == false && parseInt(value) > 0) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function(answer) {
            numUnits = answer.qty;
            // console.log(numUnits);

            for (var i = 0; i < val.length; i++) {
                if (val[i].id == answer.item) {
                    var chosenItem = val[i].id;
                    var chosenItemQTY = val[i].quantity;
                    var chosenPrice = val[i].price * numUnits;
                    var endQty = chosenItemQTY - numUnits;
                    if (endQty < 0) {
                        console.log('Sorry! Theres not enough stock. Please try again!')
                        console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_')
                        console.log('_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-')
                        console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_')
                        startShopping();
                    } else {
                        connection.query("UPDATE products SET ? WHERE ?", [{
                            quantity: endQty
                        }, {
                            id: chosenItem
                        }], function(err, res) {
                            console.log("Succesfully added! The price was $" + chosenPrice);
                            inquirer.prompt({
                                name: "again",
                                type: "confirm",
                                message: " Would you like to make another purchase?"
                            }).then(function(answer) {
                                if (answer.again == true) {
                                    startShopping();
                                } else {
                                    console.log("Come back again soon!");
                                }
                            })
                        });
                    }


                }
            }

        })
    })
}
