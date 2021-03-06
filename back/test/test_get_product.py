from urllib import response
from src.lib.utils import temp_file

from src.webserver import create_app
from src.domain.product import ProductRepository, Product


def test_should_return_empty_list_of_product():

    # ARRANGE
    products_repository = ProductRepository(temp_file())
    app = create_app(repositories={"product": products_repository})
    client = app.test_client()

    # ACT
    response = client.get("/api/products")

    # ASSERT
    assert response.json == []


def test_should_return_product_in_database():

    # ARRANGE
    products_repository = ProductRepository(temp_file())
    app = create_app(repositories={"product": products_repository})
    client = app.test_client()

    producto_1 = Product(
        id="product-1",
        name="producto queen",
        description="un tributo a queen",
        image="2022-01-25",
        contact=False,
        price="22:00",
    )
    products_repository.save(producto_1)

    # ACT
    response = client.get("/api/products")

    # ASSERT
    assert response.json == [
        {
            "id": "event-1",
            "name": "concierto queen",
            "description": "un tributo a queen",
            "date": "2022-01-25",
            "completed": False,
            "time": "22:00:00",
        }
    ]
