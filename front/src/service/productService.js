export function getAllProducts() {
<<<<<<< HEAD
    return fetch("http://localhost:5000/api/products", {method:"GET"})
          .then(res => res.json())
  }

export function getProductId(id) {
    return fetch ("http://localhost:5000/api/products/" + id, {method:"GET"})
          .then(res=> res.json())
}
=======
    return fetch("http://localhost:5000/api/products", { method: "GET" })
        .then(res => res.json())
}
>>>>>>> 333a001980696d3c5f805fc6ff64497d6b8902c9
