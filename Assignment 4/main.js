let current_inventory = {
    1: {
        name: "Acer Nitro 7",
        brand: "Acer",
        price: 1000,
        quantity: 10,
    },
    2: {
        name: "Asus ROG Strix",
        brand: "Asus",
        price: 1200,
        quantity: 5,
    },
    3: {
        name: "MSI GL65 Leopard",
        brand: "MSI",
        price: 1500,
        quantity: 3,
    },
    4: {
        name: "Lenovo Legion Y540",
        brand: "Lenovo",
        price: 1300,
        quantity: 7,
    },
    5: {
        name: "HP Omen 15",
        brand: "HP",
        price: 1100,
        quantity: 8,
    },
};

let incoming_purchase = {
    1: {
        name: "Acer Nitro 7",
        brand: "Acer",
        price: 1000,
        quantity: 5,
    },
    2: {
        name: "Asus ROG Strix",
        brand: "Asus",
        price: 1200,
        quantity: 5,
    },
    3: {
        name: "MSI GL65 Leopard",
        brand: "MSI",
        price: 1500,
        quantity: 3,
    },
    4: {
        name: "Lenovo Legion Y540",
        brand: "Lenovo",
        price: 1300,
        quantity: 7,
    },
    5: {
        name: "HP Omen 15",
        brand: "HP",
        price: 1100,
        quantity: 8,
    },
    6: {
        name: "Dell G3",
        brand: "Dell",
        price: 900,
        quantity: 10,
    },
};

let orders = {
    1: {
        name: "Acer Nitro 7",
        brand: "Acer",
        price: 1000,
        quantity: 5,
    },
};

function is_empty(string) {
    if (string.length == 0) {
        return true;
    }
    return false;
}

function getIndex(tbody) {
    let index = tbody.children.length || 0;
    return index;
}

function clearAll() {
    clearCurrentInventory();
    clearIncomingOrder();
    clearOutgoingOrder();
}

function clearCurrentInventory() {
    document.querySelector("#current_inventory_list").innerHTML = "";
}

function clearIncomingOrder() {
    document.querySelector("#incoming_inventory_list").innerHTML = "";
}

function clearOutgoingOrder() {
    document.querySelector("#outgoing_inventory_list").innerHTML = "";
}

function addCurrentInventory() {
    let product_name = document.querySelector("#current_order_product_name").value;
    let product_brand = document.querySelector(
        "#current_order_product_brand"
    ).value;
    let product_price = document.querySelector(
        "#current_order_product_price"
    ).value;
    let product_quantity = document.querySelector(
        "#current_order_product_quantity"
    ).value;

    if (
        is_empty(product_name) ||
        is_empty(product_brand) ||
        is_empty(product_price) ||
        is_empty(product_quantity)
    ) {
        alert("Please fill out all fields");
        return;
    }

    let tbody = document.querySelector("#current_inventory_list");

    let tr = `<tr>
    <th scope='row'>${getIndex(tbody) + 1}</th>
    <td>${product_name}</td>
    <td>${product_brand}</td>
    <td>${product_quantity}</td>
    <td>$${product_price}</td>`;

    tbody.innerHTML += tr;
}

function addIncomingOrder() {
    let product_name = document.querySelector(
        "#incoming_order_product_name"
    ).value;
    let product_brand = document.querySelector(
        "#incoming_order_product_brand"
    ).value;
    let product_price = document.querySelector(
        "#incoming_order_product_price"
    ).value;
    let product_quantity = document.querySelector(
        "#incoming_order_product_quantity"
    ).value;

    if (
        is_empty(product_name) ||
        is_empty(product_brand) ||
        is_empty(product_price) ||
        is_empty(product_quantity)
    ) {
        alert("Please fill out all fields");
        return;
    }

    let tbody = document.querySelector("#incoming_inventory_list");

    let tr = `<tr>
    <th scope='row'>${getIndex(tbody) + 1}</th>
    <td>${product_name}</td>
    <td>${product_brand}</td>
    <td>${product_quantity}</td>
    <td>$${product_price}</td>`;

    tbody.innerHTML += tr;
}

function addOutgoingOrder() {
    let product_name = document.querySelector(
        "#outgoing_order_product_name"
    ).value;
    let product_brand = document.querySelector(
        "#outgoing_order_product_brand"
    ).value;
    let product_price = document.querySelector(
        "#outgoing_order_product_price"
    ).value;
    let product_quantity = document.querySelector(
        "#outgoing_order_product_quantity"
    ).value;

    if (
        is_empty(product_name) ||
        is_empty(product_brand) ||
        is_empty(product_price) ||
        is_empty(product_quantity)
    ) {
        alert("Please fill out all fields");
        return;
    }

    let tbody = document.querySelector("#outgoing_inventory_list");

    let tr = `<tr>
    <th scope='row'>${getIndex(tbody) + 1}</th>
    <td>${product_name}</td>
    <td>${product_brand}</td>
    <td>${product_quantity}</td>
    <td>$${product_price}</td>`;

    tbody.innerHTML += tr;
}


  
