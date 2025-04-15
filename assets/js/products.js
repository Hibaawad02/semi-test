const productCard = document.querySelectorAll(".product-card");

// Add click event listener to the product card
productCard.forEach(card => {
    card.addEventListener('click',()=>{
        window.location.href="./product.html";
    });
});