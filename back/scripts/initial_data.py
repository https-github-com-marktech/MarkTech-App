def main():
    import sys

    sys.path.insert(0, "")

    from src.domain.product import Product, ProductRepository

    database_path = "data/product-list.db"

    producto_1 = Product(
        id="product-1",
        name="producto queen",
        description="un tributo a queen",
        image="https://picsum.photos/200/300",
        contact=False,
        price="22:00",
    )
    producto_2 = Product(
        id="Product-2",
        name="producto iker",
        description="un tributo a iker",
        image="https://picsum.photos/200/300",
        contact=False,
        price="23:00",
    )
    producto_3 = Product(
        id="Product-3",
        name="producto camelia",
        description="un tributo a camelia",
        image="https://picsum.photos/200/300",
        contact=False,
        price="21:00",
    )
    producto_4 = Product(
        id="Product-4",
        name="producto ainara",
        description="un tributo a ainara",
        image="https://picsum.photos/200/300",
        contact=False,
        price="17:00",
    )
    product_repository = ProductRepository(database_path)
    product_repository.save(producto_1)
    product_repository.save(producto_2)
    product_repository.save(producto_3)
    product_repository.save(producto_4)


if __name__ == "__main__":
    main()

  