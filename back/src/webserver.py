from flask import Flask, request
from flask_cors import CORS
from src.domain.product import Product
from src.lib.utils import object_to_json

# ROUTER / CONTROLLER

def create_app(repositories):
    app = Flask(__name__)
    CORS(app)

    @app.route("/", methods=["GET"])
    def hello_world():
        return "...magic!"

    @app.route("/api/products", methods=["GET"])
    def events_get():
        all_products = repositories["product"].get_product()
        return object_to_json(all_products)
