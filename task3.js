// Data storage
let products = [];

document.getElementById('addProductBtn').addEventListener('click', handleProduct);

// Function for processing a product
function handleProduct() {
    const nameInput = document.getElementById('productName');
    const priceInput = document.getElementById('productPrice');
    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);

    // Validation
    if (name === '' || isNaN(price) || price <= 0) {
        alert('Please enter valid product name and price.');
        return;
    }

    // Create product
    const product = {
        id: Date.now(),
        name: name,
        price: price
    };
    products.push(product);

    // Update UI
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
    document.getElementById('productList').appendChild(li);

    // Update total
    updateTotal();

    // Clear inputs
    nameInput.value = '';
    priceInput.value = '';
}

// Function for total calculation AND direct DOM update
function updateTotal() {
    let total = 0;
    for (const p of products) {
        total += p.price;
    }
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

// Repetitive structure
function clearInputs() {
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
}
