from flask import Flask, request
from flask_cors import CORS
from src.domain.product import Product
from src.lib.utils import object_to_json


def create_app(repositories):
    app = Flask(__name__)
    CORS(app)

    @app.route("/api/products", methods=["GET"])
    def products_get():
        all_products = repositories["product"].get_product()
        return object_to_json(all_products)

    @app.route("/api/products/<id>", methods=["GET"])
    def products_get_by_id(id):
        product_by_id = repositories["product"].get_products_by_id(id)
        return object_to_json(product_by_id)

    @app.route("/api/products", methods=["POST"])
    def products_post():
        data = request.json
        product = Product(**data)
        repositories["product"].save(product)
        return ""

    return app
