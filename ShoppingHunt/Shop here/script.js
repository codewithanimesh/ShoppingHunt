// API URL: https://fakestoreapi.com/products
var apiUrl = `https://fakestoreapi.com/products`;

// Function to fetch products from the API
const fetchProducts =  (limit = null) => {
    // Fetch data from the API

    if (limit) {
        apiUrl =  `https://fakestoreapi.com/products?limit=${limit}`;
    }

    console.log(limit);
    fetch(apiUrl)
        .then(res => res.json()) // Parse the response as JSON
        .then(json => {
            const products = json; // Assign the parsed JSON to the products variable
            console.log(products); // Log the products to the console
            let output = ''; // Initialize an empty string for the output
            // Loop through each product
            products.forEach(product => {
                // Slice the first 100 characters of the product description
                const description = product.description.slice(0, 100);
                // Append a card for each product to the output string
                output += `
                <div class="card m-2" style="width: 18rem;">
                    <div class="card-header">
                        <h3>${product.title}</h3>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <img src="${product.image}" class="product-image" alt="${product.title}" />
                        <hr>
                        <div>
                        <p>${description}....</p>
                        <p>Price: $${product.price}</p>
                        <button class="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
                `
            });
            // Insert the output string into the 'products' element
            document.getElementById('products').innerHTML = output;
        }).catch((err) => {
            console.log(err); // Log any errors to the console
            alert('Error fetching products'); // Alert the user of any errors
        });
}

fetchProducts();

// Call the fetchProducts function
document.getElementById('showAll').addEventListener('click', function(e) {
    e.preventDefault();
    fetchProducts(); // Fetch all products
});

document.getElementById('showFive').addEventListener('click', function(e) {
    e.preventDefault();
    fetchProducts(5); // Fetch 5 products
});

document.getElementById('showTen').addEventListener('click', function(e) {
    e.preventDefault();
    fetchProducts(10); // Fetch 10 products
});

document.getElementById('showFifteen').addEventListener('click', function(e) {
    e.preventDefault();
    fetchProducts(15); // Fetch 15 products
});



document.getElementById('searchProduct').addEventListener('click', (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('search').value;
    const searchUrl = `https://fakestoreapi.com/products/${searchTerm}`;
    fetch(searchUrl)
        .then(res => res.json())
        .then(json => {
            const product = json;
            console.log(product);
            let output = '';
            output += `
                <div class="card m-2" style="width: 18rem;">
                    <div class="card-header">
                        <h3>${product.title}</h3>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <img src="${product.image}" class="product-image" alt="${product.title}" />
                        <hr>
                        <div>
                        <p>${product.description}</p>
                        <p>Price: $${product.price}</p>
                        <button class="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
                `
            document.getElementById('products').innerHTML = output;
        }).catch((err) => {
            console.log(err);
            alert('Error fetching product');
        });
});


// Get the dropdown button
var dropdownButton = document.querySelector('.dropdown-toggle');

// Get all the dropdown items
var dropdownItems = document.querySelectorAll('.dropdown-item');

// Add a click event listener to each dropdown item
dropdownItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        // Prevent the default action
        e.preventDefault();

        // Update the dropdown button text
        dropdownButton.textContent = this.textContent;

        // Add your code here to do something when a new item is selected
    });
});

