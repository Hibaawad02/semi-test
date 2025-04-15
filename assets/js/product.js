const decreaseBtn = document.getElementById("decreaseBtn");
const quantityInput = document.getElementById("quantityInput");
const increaseBtn = document.getElementById("increaseBtn");

increaseBtn.addEventListener('click',()=>{
    let value = parseInt(quantityInput.value);
    quantityInput.value=value + 1;
});

decreaseBtn.addEventListener('click',()=>{
    let value = parseInt(quantityInput.value);
    if(value > 1){
        quantityInput.value = value - 1;
    }
});

const productCard = document.querySelectorAll(".product-card");

// Add click event listener to the product card
productCard.forEach(card => {
    card.addEventListener('click',()=>{
        window.location.href="./product.html";
    });
});