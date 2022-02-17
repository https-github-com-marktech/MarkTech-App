export function getAllProducts() {
    return fetch("http://localhost:5000/api/products", {method:"GET"})
          .then(res => res.json())
  }

export function getProductId(id) {
    return fetch ("http://localhost:5000/api/products/" + id, {method:"GET"})
          .then(res=> res.json())
}
