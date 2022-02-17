export function getAllProducts() {
    return fetch("http://localhost:5000/api/products", { method: "GET" })
        .then(res => res.json())
}