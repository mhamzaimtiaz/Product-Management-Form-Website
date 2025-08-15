let totalqty = 0, totalprice = 0;

function ADDITEM() {
    let name = prompt("Enter product name:");
    if (!name) return;

    let qty = +prompt("Enter quantity:");
    if (qty <= 0) return;

    let price = +prompt("Enter price per item:");
    if (price < 0) return;

    let producttotal = qty * price;

    document.getElementById("productContainer").innerHTML +=
        `<div class="product-item">
            <span>${name}</span>
            <span>Qty: ${qty}</span>
            <span>Price: $${price}</span>
            <span>Total: $${producttotal}</span>
        </div>`;

    totalqty = totalqty + qty;
    totalprice =totalprice + producttotal;

    document.getElementById("totalQty").textContent = totalqty;
    document.getElementById("totalPrice").textContent = totalprice;
}
