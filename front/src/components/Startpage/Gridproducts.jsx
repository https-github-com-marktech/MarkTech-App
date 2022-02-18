import React from 'react'
import './gridproducts.css'
import Cards from './Cards'
import Laptop1 from '../images/computer-1.png'
import Laptop2 from '../images/computer-2.png'
import Laptop3 from '../images/computer-3.png'
import Phone1 from '../images/phone-1.png'
import Phone2 from '../images/phone-2.png'
import Phone3 from '../images/phone-3.png'
import Keyboard1 from '../images/keyboard-1.png'
import Keyboard2 from '../images/keyboard-2.png'
import Keyboard3 from '../images/keyboard-3.png'
import Camera1 from '../images/camera-1.png'
import Camera2 from '../images/camera-2.png'
import Camera3 from '../images/camera-3.png'


function Gridproducts() {
  return (

      <div className='container'>
         <h2 className='titulo'>LAPTOPS</h2>
          <div className='cardBox'>               
     
      <Cards  img={Laptop1} nombre='Asus Computer '  
      descripcion='New' precio='$1200'
       solicitudComprador='Contacto vía: email'  />

    <Cards  img={Laptop2} nombre='Apple Computer'  
      descripcion='Second Hand' precio='$2700'
       solicitudComprador='email, telephone'  />


    <Cards  img={Laptop3} nombre='Acer Computer'  
      descripcion='Second Hand' precio='$1100'
       solicitudComprador='email'  />

              </div>

              
              <h2 className='titulo'>CELLPHONES</h2>
          <div className='cardBox'>               
     
          <Cards  img={Phone1} nombre='Cellphone'  
      descripcion='blablablasacdsadf' precio='$2500'
       solicitudComprador='hihihih'  />


    <Cards  img={Phone2} nombre='Cellphone'  
      descripcion='blablablasacdsadf' precio='$2500'
       solicitudComprador='hihihih'  />

  <Cards img={Phone3} nombre='Cellphone'  
      descripcion='blablablasacdsadf' precio='$2500'
       solicitudComprador='hihihih'  />

              </div>

              <h2 className='titulo'>CAMERAS</h2>
          <div className='cardBox'>               
     
      <Cards  img={Camera1} nombre='Cameras'  
      descripcion='blablabla' precio='$3500'
       solicitudComprador='acfsdfsd'  />

 <Cards  img={Camera2} nombre='Cameras'  
      descripcion='blablabla' precio='$3500'
       solicitudComprador='acfsdfsd'  />

      <Cards  img={Camera3} nombre='Cameras'  
      descripcion='blablabla' precio='$3500'
       solicitudComprador='acfsdfsd'  />
              </div>

              <h2 className='titulo'>KEYBOARDS</h2>
          <div className='cardBox'>               
     
          <Cards img={Keyboard1} nombre='keyboard'  
      descripcion='psappapapa' precio='$500'
       solicitudComprador='ecdlld'  />

    <Cards img={Keyboard2} nombre='keyboard'  
      descripcion='psappapapa' precio='$500'
       solicitudComprador='ecdlld'  />

    <Cards img={Keyboard3} nombre='keyboard'  
      descripcion='psappapapa' precio='$500'
       solicitudComprador='ecdlld'  />
              </div>
       </div>
  )
}

export default Gridproducts

