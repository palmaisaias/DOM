
// defining the array of producst provided in the assignment
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];


function displayProducts() {
    const container = document.getElementById('product-container');

    container.innerHTML = '';


    // this will itereate through every item on the 'products' array and create an html element 
    // this basically builds the framework for all of this JS to be displayed on the browser
    products.forEach(product => {
        // this creates a div element for each product
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        // adds the product name as an h2 heading
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        // adds the price of the product to a 'p' aka paragraph in html
        // using toFixed(2) is cool,because that converts a number and converts it to a string 
        // ALSO presents that converted number with only 2 decimal places
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
        productDiv.appendChild(productPrice);

        // creating the paragraph element for the product description
        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

        // finally this appends the div created in the first step to the container
        container.appendChild(productDiv);
    });
}

//adding the even listiner to let the information show on the browser
window.addEventListener('load', displayProducts);


// prints out the products array in the console
console.log(products);