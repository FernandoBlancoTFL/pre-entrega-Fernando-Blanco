const API_URL = "https://fakestoreapi.com/products";

//obtener todos los productos
export async function getAllProducts() {
  const res = await fetch(API_URL);
  return res.json();
}

//obtener producto por id
export async function getProductById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

//crear un producto
export async function createProduct(title, price, category) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      title,
      price,
      category
    }),
    headers: { "Content-Type": "application/json" }
  });
  return res.json();
}

//eliminar un producto
export async function deleteProduct(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return res.json();
}
