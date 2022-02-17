import React from 'react'
import './gridproducts.css'
import Cards from './Cards'
import Laptop from '../images/laptop-33521_1280.png'
import Apple from '../images/apple.jpg'
import Laptop1 from '../images/laptop1.jpg'
import Cellphone from '../images/mobile-phone.png'
import Keyboard from '../images/keyboard.jpg'
import Cameras from '../images/camera.png'


function Gridproducts() {
  return (

      <div className='container'>
         <h2 className='titulo'>LAPTOPS</h2>
          <div className='cardBox'>               
     
      <Cards  img={Laptop} nombre='Asus Computer '  
      descripcion='New' precio='$1200'
       solicitudComprador='Contacto vía: email'  />

    <Cards  img={Apple} nombre='Apple Computer'  
      descripcion='Second Hand' precio='$2700'
       solicitudComprador='email, telephone'  />


    <Cards  img={Laptop1} nombre='Acer Computer'  
      descripcion='Second Hand' precio='$1100'
       solicitudComprador='email'  />

              </div>

              
              <h2 className='titulo'>CELLPHONES</h2>
          <div className='cardBox'>               
     
          <Cards  img={Cellphone} nombre='Cellphone'  
      descripcion='blablablasacdsadf' precio='$2500'
       solicitudComprador='hihihih'  />


    <Cards  img={Cellphone} nombre='Cellphone'  
      descripcion='blablablasacdsadf' precio='$2500'
       solicitudComprador='hihihih'  />

  <Cards img={Cellphone} nombre='Cellphone'  
      descripcion='blablablasacdsadf' precio='$2500'
       solicitudComprador='hihihih'  />

              </div>

              <h2 className='titulo'>CAMERAS</h2>
          <div className='cardBox'>               
     
      <Cards  img={Cameras} nombre='Cameras'  
      descripcion='blablabla' precio='$3500'
       solicitudComprador='acfsdfsd'  />

 <Cards  img={Cameras} nombre='Cameras'  
      descripcion='blablabla' precio='$3500'
       solicitudComprador='acfsdfsd'  />

      <Cards  img={Cameras} nombre='Cameras'  
      descripcion='blablabla' precio='$3500'
       solicitudComprador='acfsdfsd'  />
              </div>

              <h2 className='titulo'>KEYBOARDS</h2>
          <div className='cardBox'>               
     
          <Cards img={Keyboard} nombre='keyboard'  
      descripcion='psappapapa' precio='$500'
       solicitudComprador='ecdlld'  />

    <Cards img={Keyboard} nombre='keyboard'  
      descripcion='psappapapa' precio='$500'
       solicitudComprador='ecdlld'  />

    <Cards img={Keyboard} nombre='keyboard'  
      descripcion='psappapapa' precio='$500'
       solicitudComprador='ecdlld'  />
              </div>
       </div>
  )
}

export default Gridproducts