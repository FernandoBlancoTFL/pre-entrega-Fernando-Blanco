import { getAllProducts, getProductById, createProduct, deleteProduct } from "./services/products.js";

const args = process.argv.slice(2);
const [method, resource, ...params] = args;

async function main() {
  try {
    if (method === "GET" && resource === "products") {
      if (params.length === 0) {
        const products = await getAllProducts();
        console.log(products);
      } else {
        const id = params[0];
        const product = await getProductById(id);
        console.log(product);
      }
    }

    if (method === "POST" && resource === "products") {
      const [title, price, category] = params;
      if (!title || !price || !category) {
        console.log("Faltan parámetros: <title> <price> <category>");
        return;
      }
      const newProduct = await createProduct(title, price, category);
      console.log(newProduct);
    }

    if (method === "DELETE" && resource.startsWith("products/")) {
      const id = resource.split("/")[1];
      const deleted = await deleteProduct(id);
      console.log(deleted);
    }
  } catch (err) {
    console.error("Error ejecutando comando:", err.message);
  }
}

main();
