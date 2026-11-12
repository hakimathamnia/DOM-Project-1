// =====================================================
//  DOM Project 1 – Shopping Cart
//  Author: Hakim Athamnia
// =====================================================

// Every product of the cart (one .card-body wrapper per product)
const products = document.querySelectorAll(".list-products > .card-body");
const totalElement = document.querySelector(".total");

// ---------- Total price ----------
// Goes through the products still in the cart and adds unit price × quantity.
function updateTotal() {
  let total = 0;
  const remainingProducts = document.querySelectorAll(".list-products > .card-body");

  remainingProducts.forEach(product => {
    const unitPrice = parseFloat(product.querySelector(".unit-price").textContent);
    const quantity = parseInt(product.querySelector(".quantity").textContent);
    total += unitPrice * quantity;
  });

  totalElement.textContent = `${total} $`;
}

// ---------- Events for each product ----------
products.forEach(product => {
  const plusButton = product.querySelector(".fa-plus-circle");
  const minusButton = product.querySelector(".fa-minus-circle");
  const deleteButton = product.querySelector(".fa-trash-alt");
  const heartButton = product.querySelector(".fa-heart");
  const quantityElement = product.querySelector(".quantity");

  // 1. "+" button: add one item
  plusButton.addEventListener("click", () => {
    quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
    updateTotal();
  });

  // 1. "-" button: remove one item, but never go below 0
  minusButton.addEventListener("click", () => {
    const quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantityElement.textContent = quantity - 1;
      updateTotal();
    }
  });

  // 2. Trash button: remove the product from the cart
  deleteButton.addEventListener("click", () => {
    product.remove();
    updateTotal();
  });

  // 3. Heart button: like / unlike (the heart turns red when liked)
  heartButton.addEventListener("click", () => {
    heartButton.classList.toggle("liked");
    heartButton.style.color = heartButton.classList.contains("liked") ? "red" : "";
  });
});

// 4. Show the correct total when the page loads
updateTotal();
