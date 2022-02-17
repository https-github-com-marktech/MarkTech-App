import React from 'react'
import './product.module.css'
import Productcard from './Productcard'
import Laptop1 from '../images/laptop1.jpg'


function Productcard1() {
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

export default Productcard1