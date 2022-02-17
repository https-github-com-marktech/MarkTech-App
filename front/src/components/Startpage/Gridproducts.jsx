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

        <Cards img={Laptop} nombre='Asus Computer '
          descripcion='New' precio='$1200'
          solicitudComprador='Contacto vía: email' />
      </div>
    </div>

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