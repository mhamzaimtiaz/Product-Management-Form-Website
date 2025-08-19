let products = [];
let editIndex = -1; 

function updatetotals() {
  const totalqty = products.reduce((sum, p) => sum + p.qty, 0);
  const totalprice = products.reduce((sum, p) => sum + (p.qty * p.price), 0);

  document.getElementById("totalQty").textContent = totalqty;
  document.getElementById("totalPrice").textContent = totalprice.toFixed(2);
}

function foreachproduct() {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  products.forEach((p, index) => {
    const producttotal = (p.qty * p.price).toFixed(2);
    container.innerHTML += `
      <div class="product-item">
        <div>
          <span><b>${p.name}</b></span> |
          <span>Qty: ${p.qty}</span> |
          <span>Price: $${p.price}</span> |
          <span>Total: $${producttotal}</span>
        </div>
        <div>
          <button class="edit-btn crud-btn" onclick="editItem(${index})">Edit</button>
          <button class="delete-btn crud-btn" onclick="deleteItem(${index})">Delete</button>
        </div>
      </div>`;
  });
  updatetotals();
}

function addOrUpdateItem() {
  const name = document.getElementById("productName").value.trim();
  const qty = +document.getElementById("productQty").value;
  const price = +document.getElementById("productPrice").value;

  if (!name) {
    alert("Product name cannot be empty.");
    return;
  }
  if (isNaN(qty) || qty <= 0) {
    alert("Quantity must be a valid number greater than 0.");
    return;
  }
  if (isNaN(price) || price < 0) {
    alert("Price must be a valid number (0 or greater).");
    return;
  }

  if (editIndex === -1) {
    products.push({ name, qty, price });
  } else {
    products[editIndex] = { name, qty, price };
    editIndex = -1;
    document.getElementById("Btn").textContent = "+ ADD";
    document.getElementById("CancelBtn").style.display = "none";
  }

  foreachproduct();
  resetForm();
}

function editItem(index) {
  const product = products[index];
  document.getElementById("productName").value = product.name;
  document.getElementById("productQty").value = product.qty;
  document.getElementById("productPrice").value = product.price;

  editIndex = index;
  document.getElementById("Btn").textContent = "Update";
  document.getElementById("CancelBtn").style.display = "inline-block";
}

function deleteItem(index) {
  products.splice(index, 1);
  foreachproduct();
  resetForm();
}

function resetForm() {
  document.getElementById("productName").value = "";
  document.getElementById("productQty").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("Btn").textContent = "+ ADD";
  document.getElementById("CancelBtn").style.display = "none";
  editIndex = -1;
}

function cancelItem() {
  resetForm(); 
}
