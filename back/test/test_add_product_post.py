# from urllib import response
# from src.lib.utils import temp_file

# from src.webserver import create_app
# from src.domain.product import ProductRepository, Product


# def test_should_post_new_product():

#     product_repository = ProductRepository(temp_file())
#     app = create_app(repositories={"product": product_repository})
#     client = app.test_client()

#     body = { 
#         "id": "product_1",
#         "name": "product_1",
#         "description": "abc",
#         "contact": "@",
#         "price": 20,
#         "image": "url"
#     }

#     response = client.post("/api/product", json=body)
#     response_get = client.get("/api/products/product_1")

#     assert response.status_code == 200
#     assert response_get.json == {
#         "id": "product_1",
#         "name": "product_1",
#         "description": "abc",
#         "contact": "@",
#         "price": 20,
#         "image": "url"
#     }