const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

// Create a MySQL database connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root123',
  database: 'inventory',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Create a table for current inventory if it doesn't exist
db.query(
  'CREATE TABLE IF NOT EXISTS current_inventory (id INT AUTO_INCREMENT PRIMARY KEY, product_name VARCHAR(255), product_brand VARCHAR(255), product_quantity INT, product_price DECIMAL(10, 2))',
  (err) => {
    if (err) {
      console.error('Error creating the table:', err);
    }
  }
);

app.post('/submitCurrentInventory', (req, res) => {
  const {
    current_order_product_name,
    current_order_product_brand,
    current_order_product_quantity,
    current_order_product_price,
  } = req.body;

  // Insert data into the current_inventory table
  db.query(
    'INSERT INTO current_inventory (product_name, product_brand, product_quantity, product_price) VALUES (?, ?, ?, ?)',
    [
      current_order_product_name,
      current_order_product_brand,
      current_order_product_quantity,
      current_order_product_price,
    ],
    (err) => {
      if (err) {
        console.error('Error inserting data into the table:', err);
        res.status(500).send('Error saving to the database');
      } else {
        res.redirect('/'); // Redirect to the homepage or the relevant page
      }
    }
  );
});

// Start the server
const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
