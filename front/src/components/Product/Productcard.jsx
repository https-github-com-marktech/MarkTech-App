import "../Product/Product.module.css";
import Laptop from '../images/laptop-33521_1280.png'

function Productcard( props ) {
  return (
  
    <div className="container">
      <div className='card'>     
        <div className='cardImgBox'>
        <img className='cardImg' src= {props.img}></img>
        </div>
        <h3 className='cardTitle'>{props.nombre}</h3>
        <p>{props.descripcion}</p>
        <p>{props.precio}</p>
        <p>{props.solicitudComprador}</p>
        
      </div>
    </div>
  )
}

export default Productcard