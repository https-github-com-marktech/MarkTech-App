from flask import Flask
from flask_cors import CORS
from src.domain.product import Product
from src.lib.utils import object_to_json


def create_app(repositories):
    app = Flask(__name__)
    CORS(app)

    @app.route("/api/products", methods=["GET"])
    def products_get():
        all_products = repositories["event"].get_products()
        return object_to_json(all_products)

    return app
