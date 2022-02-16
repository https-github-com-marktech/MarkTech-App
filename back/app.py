import sqlite3
from src.webserver import create_app
from src.domain.product import ProductsRepository

database_path = "data/product-list.db"

repositories = {
    "product": ProductsRepository(database_path),
}

app = create_app(repositories)

app.run(debug=True, host="0.0.0.0", port="5000")
