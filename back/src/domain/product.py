import sqlite3


class Product:
    def __init__(self, id, name, description, image, price, contact):
        self.id = id
        self.name = name
        self.description = description
        self.image = image
        self.price = price
        self.contact = contact

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "image": self.image,
            "price": self.price,
            "contact": self.contact,
        }


class ProductsRepository:
    def __init__(self, database_path):
        self.database_path = database_path
        self.init_tables()

    def create_conn(self):
        conn = sqlite3.connect(self.database_path)
        conn.row_factory = sqlite3.Row
        return conn

    def init_tables(self):
        sql = """
            create table if not exists products (
                id varchar PRIMARY KEY,
                name text,
                description text,
                image blob,
                price real,
                contact text
            )
            """
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)
        conn.commit()

    def get_product(self):
        sql = """select * from products"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)

        data = cursor.fetchall()
        result = []
        for item in data:
            product = Product(**item)
            result.append(product)
        return result

    def save(self, product):
        sql = """insert into products (id,name,description,price,contact,image) values (
            :id, :name, :description, :price, :contact , :image
        ) """
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, product.to_dict())

        conn.commit()
