from urllib import response
from src.lib.utils import temp_file

from src.webserver import create_app
from src.domain.product import ProductRepository, Product


def test_should_return_event_by_id():

    # ARRANGE

    product_repository = ProductRepository(temp_file())
    app = create_app(repositories={"event": product_repository})
    client = app.test_client()

    concierto_queen = Product(
        id="product-1",
        name="producto queen",
        description="un tributo a queen",
        image="2022-01-25",
        contact="peterrobinson@ggmail.yes",
        price="22:00",
    )

    concierto_camela = Product(
        id="product-2",
        name="producto queen 2",
        description="un tributo a queen 2",
        image="2022-01-25",
        contact="peterrobinson@ggmail.yes",
        price="22:00",
    )

    product_repository.save(concierto_queen)
    product_repository.save(concierto_camela)

    # ACT

    response = client.get("/api/products/product-1")

    # ASSERT
    assert response.json == {
        "id": "product-1",
        "name": "producto queen",
        "description": "un tributo a queen",
        "image": "2022-01-25",
        "contact": "peterrobinson@ggmail.yes",
        "price": "22:00",
    }
