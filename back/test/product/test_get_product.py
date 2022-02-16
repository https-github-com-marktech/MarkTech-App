from urllib import response
from src.lib.utils import temp_file

from src.webserver import create_app
from src.domain.product import ProductsRepository, Product


def test_should_return_empty_list_of_events():

    # ARRANGE
    products_repository = ProductsRepository(temp_file())
    app = create_app(repositories={"product": products_repository})
    client = app.test_client()

    # ACT
    response = client.get("/api/products")

    # ASSERT
    assert response.json == []
