let products = [];
let totalqty = 0, totalprice = 0;

function updatetotals() {
  totalqty = products.reduce((sum, p) => sum + p.qty, 0);
  totalprice = products.reduce((sum, p) => sum + (p.qty * p.price), 0);

  document.getElementById("totalQty").textContent = totalqty;
  document.getElementById("totalPrice").textContent = totalprice;
}

function foreachproduct() {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  products.forEach((p, index) => {
    const producttotal = p.qty * p.price;
    container.innerHTML += `
      <div class="product-item">
        <div>
          <span><b>${p.name}</b></span> |
          <span>Qty: ${p.qty}</span> |
          <span>Price: $${p.price}</span> |
          <span>Total: $${producttotal}</span>
        </div>
        <div>
          <button class="edit-btn" onclick="editItem(${index})">Edit</button>
          <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
        </div>
      </div>`;
  });
  updatetotals();
}

function addItem() {
  let name = prompt("Enter product name:");
  if (!name) return;

  let qty = +prompt("Enter quantity:");
  if (qty <= 0) return;

  let price = +prompt("Enter price per item:");
  if (price < 0) return;

  products.push({ name, qty, price });
  foreachproduct();
}

function editItem(index) {
  let product = products[index];
  let newname = prompt("Edit product name:", product.name);
  if (!newname) return;

  let newqty = +prompt("Edit quantity:", product.qty);
  if (newqty <= 0) return;

  let newprice = +prompt("Edit price:", product.price);
  if (newprice < 0) return;

  products[index] = { name: newname, qty: newqty, price: newprice };
  foreachproduct();
}

function deleteItem(index) {
  if (confirm("Are you sure you want to delete this product?")) {
    products.splice(index, 1);
    foreachproduct();
  }
}
