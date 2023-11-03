<?php
// Connect to the MySQL database
$host = "127.0.0.1";
$username = "root";
$password = "root123";
$database = "inventory";

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Handle the form submission
if ($SERVER["REQUEST_METHOD"] == "POST") {
    $product_name = mysqli_real_escape_string($conn, $_POST["current_order_product_name"]);
    $product_brand = mysqli_real_escape_string($conn, $_POST["current_order_product_brand"]);
    $product_quantity = intval($_POST["current_order_product_quantity"]);
    $product_price = floatval($_POST["current_order_product_price"]);

    if (empty($product_name) || empty($product_brand) || $product_quantity <= 0 || $product_price <= 0) {
        echo "Invalid input. Please fill in all fields with valid values.";
    } else {
        $sql = "INSERT INTO current_inventory (product_name, product_brand, product_quantity, product_price) VALUES (?, ?, ?, ?)";
        $stmt = mysqli_prepare($conn, $sql);

        if ($stmt) {
            mysqli_stmt_bind_param($stmt, "ssdd", $product_name, $product_brand, $product_quantity, $product_price);

            if (mysqli_stmt_execute($stmt)) {
                echo "Data saved successfully.";
            } else {
                echo "Error: " . mysqli_error($conn);
            }

            mysqli_stmt_close($stmt);
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    }
}

mysqli_close($conn);
?>
