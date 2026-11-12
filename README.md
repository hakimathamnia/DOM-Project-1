# DOM Project 1 – Shopping Cart

**Author:** Hakim Athamnia ([@hakimathamnia](https://github.com/hakimathamnia)) · GoMyCode – Introduction to Computer Programming, The World of DOM

A fully working shopping cart built with **JavaScript DOM events** on top of the HTML provided for the checkpoint.

## Features

| # | Feature | How it works |
|---|---------|--------------|
| 1 | **Adjust the quantity** with the ➕ and ➖ buttons | Each click updates the quantity shown on the card. The quantity can never go below 0. |
| 2 | **Delete a product** with the 🗑️ button | The whole product card is removed from the page with `element.remove()`. |
| 3 | **Like a product** with the ❤️ button | Each click toggles a `liked` class: the heart turns red, and goes back to black on the next click. |
| 4 | **Total price updated automatically** | After every change, the total is recalculated from the products still in the cart: unit price × quantity. |

## How the JavaScript is organized

- `updateTotal()` goes through the remaining products, reads each **unit price** and **quantity** from the page, and displays the sum in `.total`.
- For each product, I select its buttons with `querySelector` and attach **`click` event listeners** with `addEventListener`.
- After every action that changes the cart (➕, ➖, 🗑️), `updateTotal()` is called again, so the total is always correct.
- The heart uses `classList.toggle("liked")` to switch between liked and not liked, and its color is set directly in JavaScript, so it turns red even though the provided CSS colors every icon black.

## Project structure

```
index.html        → the HTML provided for the checkpoint (file paths made relative)
style/style.css   → the CSS provided for the checkpoint
js/script.js      → all the DOM logic of the cart
assets/           → product images
```

## Run it

Open `index.html` in a browser, no installation needed.

I changed the file paths in the provided HTML from absolute (`/style/style.css`) to relative (`style/style.css`), so the page also works when `index.html` is opened directly from a folder.
