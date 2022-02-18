def main():
    import sys

    sys.path.insert(0, "")

    from src.domain.product import Product, ProductRepository

    database_path = "data/product-list.db"


    producto_1 = Product(
        id="product-4",
        name="HP ENVY Laptop",
        description="Superpower for creative superheroes",
        features="Windows 11 Home, 11th Gen Intel® Core™ i5 processor, Intel® Iris® Xe Graphics, 16 GB memory (onboard); 256 GB SSD storage",
        image="../components/images/computer-1.jpg",
        contact="factoriaf5@contact.com",
        price="899.99",
    )
    producto_2 = Product(
        id="Product-5",
        name="ASUS TUF Gaming F15 FX506HM",
        description="Teclado + Ratón Inalámbricos Blanco",
        features='Computer Gaming de 15.6" Full HD 144Hz (Intel Core i5-11400H, 16GB RAM, 512GB SSD, GeForce RTX 3060 6GB, No Operative System) Black Grafite - Keyboard QWERTY spanish',
        image="../components/images/computer-2.jpg",
        contact="factoriaf5@contact.com",
        price="1.013.99",
    )
    producto_3 = Product(
        id="Product-6",
        name="Acer Aspire A515-52G",
        description="Teclado Gaming RGB",
        features='74GB laptop Core i7 8GB 1TB 15.6 HD Portugues Windows OS · HDMI · Ethernet · 1920 x 1080 · Intel CPU · Solid State Drive',
        image="../components/images/computer-3.jpg",
        contact="factoriaf5@contact.com",
        price="16.99",
    )


    producto_4 = Product(
        id="product-1",
        name="Logitech MX Keys",
        description="Wireless Keyboard Advanced Graphite",
        features="Keyboard + Mouse Wireless White",
        image="../components/images/keyboard-1.jpg",
        contact="factoriaf5@contact.com",
        price="87.98",
    )
    producto_5 = Product(
        id="Product-2",
        name="Logitech MK470 Slim Combo",
        description="Keyboard + Mouse Wireless White",
        features="Keyboard + Mouse Wireless White",
        image="../components/images/keyboard-2.jpg",
        contact="factoriaf5@contact.com",
        price="37.98",
    )
    producto_6 = Product(
        id="Product-3",
        name="Tempest K9 RGB Backlit",
        description="Keyboard Gaming RGB",
        features="Keyboard + Mouse Wireless White",
        image="../components/images/keyboard-3.jpg",
        contact="factoriaf5@contact.com",
        price="16.99",
    )


    producto_7 = Product(
        id="product-7",
        name="Samsung Galaxy S21 5G Gris",
        description="Superpower for creative superheroes",
        features='Exynos 2100 Octacore 1 x 2.9GHz / 3 x 2.8GHz / 4 x 2.2GHz Sistema operativo, Android 11 con One UI 3 Memoria, 6.2" Dynamic AMOLED 2400x1080 FHD+ (120Hz) Cámara Trasera',
        image="../components/images/phone-1.jpg",
        contact="factoriaf5@contact.com",
        price="899.99",
    )
    producto_8 = Product(
        id="Product-8",
        name="iPhone 11 Pro",
        description="Teclado + Ratón Inalámbricos Blanco",
        features='Computer Gaming de 15.6" Full HD 144Hz (Intel Core i5-11400H, 16GB RAM, 512GB SSD, GeForce RTX 3060 6GB, No Operative System) Black Grafite - Keyboard QWERTY spanish',
        image="../components/images/phone-2.jpg",
        contact="factoriaf5@contact.com",
        price="500.00",
    )
    producto_9 = Product(
        id="Product-9",
        name="Blackview BV4900 Pro",
        description="Teclado Gaming RGB",
        features='4GB RAM + 64GB ROM, El modelo futurista de la serie Blackview BV4900 Pro con el mejor precio en el mercado, Este dispositivo cuenta con  4 GB de memoria RAM junto a 64 GB de ROM. Pantalla HD de 5,7 pulgadas  bajo el sistema operativo Android 10',
        image="../components/images/phone-3.jpg",
        contact="factoriaf5@contact.com",
        price="139.98",
    )


    producto_10 = Product(
        id="product-10",
        name="Canon PowerShot G12",
        description="Superpower for creative superheroes",
        features="With the Canon Powershot G12, a range of capabilities are brought to a compact system. The full manual controls allow you to always have creative power over your images. With a wide 28mm lens and a 5x zoom you can confidently capture landscapes and people however you want. It is lightweight and fits perfectly in your pocket.",
        image="../components/images/camera-1.jpg",
        contact="factoriaf5@contact.com",
        price="64.00",
    )
    producto_11 = Product(
        id="Product-11",
        name="R 560.00 ZAR",
        description="16X Digital Zoom HD 16 Million Pixel Home Travel DV Camera(Black)",
        features='Memory Card Type:SD Card, Screen Type:LCD Screen, Image Stabilization:Electronic Image Stabilization, Set Type:Zoom Sets, Model Number:Digital Camera, Image Resolution (Video):Full HD (1920x1080), Recording Format:Picture: JPEG Video: AVI',
        image="../components/images/camera-2.jpg",
        contact="factoriaf5@contact.com",
        price="560.00",
    )
    producto_12 = Product(
        id="Product-12",
        name="KOMERY AF2 48M 4K Video Camera",
        description="Video Camera for Vlogging",
        features='Live Camcorder NightShot Anti-shake Camcorder WIFI APP Control DV Video Recording with Microphone Lens Light Stabilizer',
        image="../components/images/camera-3.jpg",
        contact="factoriaf5@contact.com",
        price="145.99",
    )



    product_repository = ProductRepository(database_path)
    product_repository.save(producto_1)
    product_repository.save(producto_2)
    product_repository.save(producto_3)
    product_repository.save(producto_4)
    product_repository.save(producto_5)
    product_repository.save(producto_6)
    product_repository.save(producto_7)
    product_repository.save(producto_8)
    product_repository.save(producto_9)
    product_repository.save(producto_10)
    product_repository.save(producto_11)
    product_repository.save(producto_12)


if __name__ == "__main__":
    main()
