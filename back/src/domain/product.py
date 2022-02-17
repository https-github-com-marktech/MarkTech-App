from itertools import product
import sqlite3

class Product:
    def __init__(self, name, description, price, image, contact, id):
        self.name = name
        self.description = description
        self.price = price
        self.image = image
        self.contact = contact
        self.id = id

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "image": self.image,
            "contact": self.contact,
        }

class ProductRepository:
    def __init__(self, databasepath):
        self.databasepath = databasepath
        self.init_tables()

    def create_conn(self):
        conn = sqlite3.connect(self.databasepath)
        conn.row_factory = sqlite3.Row
        return conn

    def init_tables(self):
        sql = """create table if not exists products (
                id varchar PRIMARY KEY,
                name text,
                description text,
                price real,
                image blob,
                contact text
            )
            """
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)
        conn.commit()

    def get_product(self):
        sql = """ select * from products"""
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
        sql = """insert into products (id,name,description,image,price,contact) values (
            :id, :name, :description, :image, :price, :contact
        ) """
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, product.to_dict())
        conn.commit()

    def get_products_by_id(self, id):
        sql = """select * from products where id=:id"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, {"id": id})

        data = cursor.fetchone()
        product = Product(**data)
        return product

