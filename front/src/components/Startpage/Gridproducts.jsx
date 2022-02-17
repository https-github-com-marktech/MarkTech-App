import React from 'react'
import './gridproducts.css'
import Cards from './Cards'
// import Laptop from '../images/laptop-33521_1280.png'
// import Cellphone from '../images/mobile-phone.png'
// import Keyboard from '../images/keyboard.jpg'
// import Cameras from '../images/camera.png'
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../service/productService';


function Gridproducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((resp) => setProducts(resp));
  }, []);

  return (
    <div className='container'>
      <h2 className='titulo'>LAPTOPS</h2>
      <div className='cardBox'>
        {products.map(
          (product) => (

            <Cards product={product} key={product.id} />

          )
        )}
      </div>
    </div>
  )
}

export default Gridproducts