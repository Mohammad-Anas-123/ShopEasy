let cart = localStorage.getItem("cart");
if(cart == null) {
    cart = 0;
}

function addToCart() {
    cart++;

    localStorage.setItem("cart", cart);

    alert("Product Added Successfully");
}

if(document.getElementById("cartCount")) {
    document.getElementById("cartCount").innerHTML = "Total Items In Cart : " + cart;
}