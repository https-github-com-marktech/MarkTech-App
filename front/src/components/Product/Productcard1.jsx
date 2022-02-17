import React from 'react'
import './product.module.css'
import Productcard from './Productcard'
import Laptop1 from '../images/laptop1.jpg'


<<<<<<< HEAD
export function Productcard1() {
=======
function Productcard1() {
>>>>>>> 333a001980696d3c5f805fc6ff64497d6b8902c9
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

<<<<<<< HEAD
export default Productcard1


/* import "../Product/Product.module.css";
import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../../service/productService";

export function Productcard(props) {

  let { id } = useParams();
    
  return (
    <div className="container">
        <h1>id es {props.product.id}</h1> 
    </div>
  )
}

export default Productcard
 */
=======
export default Productcard1
>>>>>>> 333a001980696d3c5f805fc6ff64497d6b8902c9
