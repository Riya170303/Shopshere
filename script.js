// Sample products
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1499,
        image: "box4_image.jpg"
    },
    {
        id: 2,
        name: "Face Cream",
        price: 599,
        image: "box2_image.jpg"
    },
    {
        id: 3,
        name: "Teddy Bear",
        price: 899,
        image: "teddy.jpg"
    },
    {
        id: 4,
        name: "Wall Frame",
        price: 1299,
        image: "cat_image.jpg"
    }
];

// Cart data
let cart = [];

// Render products dynamically
function displayProducts() {
    const shopSection = document.querySelector('.shop-section');
    shopSection.innerHTML = ''; // Clear existing content

    products.forEach(product => {
        const productBox = document.createElement('div');
        productBox.className = 'box';
        productBox.innerHTML = `
            <h2>${product.name}</h2>
            <div class="box-img" style="background-image: url('${product.image}');"></div>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        shopSection.appendChild(productBox);
    });
}

// Add to cart
function addToCart(id) {
    const item = products.find(p => p.id === id);
    const existing = cart.find(p => p.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({...item, quantity: 1});
    }

    alert(`${item.name} added to cart!`);
    updateCartIcon();
}

// Update cart icon count
function updateCartIcon() {
    const navCart = document.querySelector('.nav-cart');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    navCart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${totalItems})`;
}

// Run on load
window.onload = () => {
    displayProducts();
    updateCartIcon();
};
