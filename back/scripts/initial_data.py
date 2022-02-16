import sys


sys.path.insert(0, "")
from src.domain.product import ProductsRepository, Product

database_path = "data/product-list.db"


product_tv = Product(
    id="product-1",
    name="product queen",
    description="un tributo a queen",
    image="una imagen",
    contact="52665165161",
    price=65.55,
)
product_screen = Product(
    id="product-2",
    name="product queen",
    description="un tributo a queen",
    image="una imagen",
    contact="52665165161",
    price=65.55,
)
product_laptop = Product(
    id="product-3",
    name="product queen",
    description="un tributo a queen",
    image="una imagen",
    contact="52665165161",
    price=65.55,
)
product_ram = Product(
    id="product-4",
    name="product queen",
    description="un tributo a queen",
    image="una imagen",
    contact="52665165161",
    price=65.55,
)

product_repository = ProductsRepository(database_path)
product_repository.save(product_screen)
product_repository.save(product_laptop)
product_repository.save(product_ram)
product_repository.save(product_tv)
