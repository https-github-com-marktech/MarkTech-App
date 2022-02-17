export function getAllProducts() {
    return fetch("http://192.168.1.50:5000/api/products", {method:"GET"})
          .then(res => res.json())
  }