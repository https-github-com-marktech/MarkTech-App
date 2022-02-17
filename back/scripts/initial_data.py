def main():
    import sys

    sys.path.insert(0, "")

    from src.domain.product import Product, ProductRepository

    database_path = "data/product-list.db"

    producto_1 = Product(
        id="product-1",
        name="television plasma",
        description="Esta es la mejor television de plasma que te vas ha encontrar en el mercado",
        image="https://picsum.photos/200/300",
        contact="peterstevenson@ggmail.yes",
        price="1500.00",
    )
    producto_2 = Product(
        id="Product-2",
        name="monitor de plasma",
        description="Este es el mejor monitor de plasma que te vas ha encontrar en el mercado",
        image="https://picsum.photos/200/300",
        contact="martinstevenson@ggmail.yes",
        price="500.00",
    )
    producto_3 = Product(
        id="Product-3",
        name="Ordenador de plasma",
        description="Este es el mejor ordeandor de plasma que te vas ha encontrar en el mercado",
        image="https://picsum.photos/200/300",
        contact="peterrobinson@ggmail.yes",
        price="1500.00",
    )
    producto_4 = Product(
        id="Product-4",
        name="raton de plasma",
        description="Este es el mejor plasma de plasma que te vas ha encontrar en el mercado",
        image="https://picsum.photos/200/300",
        contact="martinrobinson@ggmail.yes",
        price="50.00",
    )
    product_repository = ProductRepository(database_path)
    product_repository.save(producto_1)
    product_repository.save(producto_2)
    product_repository.save(producto_3)
    product_repository.save(producto_4)


if __name__ == "__main__":
    main()
