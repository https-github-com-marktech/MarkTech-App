import React from 'react'
import './gridproducts.css'
import Cards from './Cards'
// import Laptop from '../images/laptop-33521_1280.png'
// import Apple from '../images/apple.jpg'
// import Laptop1 from '../images/laptop1.jpg'
// import Cellphone from '../images/mobile-phone.png'
// import Keyboard from '../images/keyboard.jpg'
// import Cameras from '../images/camera.png'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getProductId } from "../../service/productService";
// import { getAllProducts } from '../../service/productService';


export function Gridproducts() {

  const { id } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    // getAllProducts().then((resp) => setProducts(resp));
    getProductId(id).then((products) => setProducts(products));
  }, [id]);

  return (

    <div className='container'>
      <h2 className='titulo'>LAPTOPS</h2>
      <div className='cardBox'>{products.map(
              (product) => (<Cards product={product} key={product.id} />)
            )}
          </div>
    </div>
  
  );
};


/* 
const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((resp) => setProducts(resp));
  })

    getCardById(id).then((resp) => setProducts (resp));

<div className='container'>
      <h2 className='titulo'>LAPTOPS</h2>
      <div className='cardBox'>

        <Cards img={Laptop} nombre='Asus Computer '
          descripcion='New' precio='$1200'
          solicitudComprador='Contacto vía: email' />
          
      </div>
    </div> */