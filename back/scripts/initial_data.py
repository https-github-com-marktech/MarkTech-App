import sys

# FAKE DATA

sys.path.insert(0, "")
from src.domain.product import ProductsRepository, Product

database_path = "data/product-list.db"


product_tv = Product(
    id="product-1",
    name="product tv",
    description="un tributo a queen",
    image="una imagen",
    contact="52665165161",
    price=65.55,
    location="España",
    features="pantalla, ...",
    key_words="tv, pantalla, ...",
)
product_screen = Product(
    id="product-2",
    name="product screen",
    description="un tributo a queen",
    image="una imagen",
    contact="52665165161",
    price=65.55,
    location="España",
    features="pantalla, ...",
    key_words="tv, pantalla, ...",
)
product_laptop = Product(
    id="product-3",
    name="product laptop",
    description="un tributo a queen",
    image="una imagen",
    contact="52665165161",
    price=65.55,
    location="España",
    features="pantalla, ...",
    key_words="tv, pantalla, ...",
)
product_ram = Product(
    id="product-4",
    name="product ram",
    description="un tributo a queen",
    image="una imagen",
    contact="52665165161",
    price=65.55,
    location="España",
    features="pantalla, ...",
    key_words="tv, pantalla, ...",
)

product_repository = ProductsRepository(database_path)
product_repository.save(product_screen)
product_repository.save(product_laptop)
product_repository.save(product_ram)
product_repository.save(product_tv)
