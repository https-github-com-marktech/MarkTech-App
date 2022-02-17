from urllib import response
from src.lib.utils import temp_file

from src.webserver import create_app
from src.domain.product import ProductRepository, Product


def test_should_return_empty_list_of_events():

    products_repository = ProductRepository(temp_file())
    app = create_app(repositories={"event": products_repository})
    client = app.test_client()

    response = client.get("/api/products")

    
    assert response.json == []
