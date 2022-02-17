import React from 'react'
import './product.module.css'
// import Productcard from './Productcard'
// import Laptop1 from '../images/laptop1.jpg'
// import "../Product/product.module.css";
import { useEffect, useState } from 'react';
//  import { useParams } from "react-router-dom";
import { getProductId } from "../../service/productService";

import Productcard from "./Productcard"; 
// import { getAllProducts } from '../../service/productService';

function Productcard1(props) {

/*   let { id } = useParams();
 */ /*  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProductId(id).then((resp) => setProducts(resp));
  }, [id]); */
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductId(props.product.id).then((resp) => setProducts(resp));
    }, [props])

  return (
    <div className="container">
        <h1>id es {props.product.id}</h1> 
        
        <div className='cardBox'>
        <div className='cardBox'>{
          products.map(
            (product) => (
              <Productcard product={product} key={product.id} />
            ))}
        </div>
        </div>
    </div>
  )
}

export default Productcard1



/* function Productcard1() {
  return (

      <div className='container'>
         <h2 className='titulo'>LAPTOPS</h2>
          <div className='cardBox' >               
     
      <Productcard  img={Laptop1} nombre='Asus Computer'  
      descripcion='Prixton Flex Pro Intel Apollo Lake N3350/4GB/64GB/11.6" Táctil ' precio='Price: $1500'
       solicitudComprador='Contact: pepito@gmail.com' />

         
              </div>
       </div>
  )
}

export default Productcard1 */
