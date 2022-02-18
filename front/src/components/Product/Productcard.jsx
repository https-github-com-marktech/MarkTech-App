import "./product.module.css";
// import Laptop from '../images/laptop-33521_1280.png'

function Productcard( props, width  ) {
  return (
  
    <div className='container'>
      <div className='card' >     
        <div className='cardImgBox' >
        <img className='cardImg' src= {props.img} alt={props.nombre}></img>
        </div>
        <h3 className='cardTitle'>{props.nombre}</h3>
        <p className="cardDescription">{props.descripcion}</p>
        <p>{props.precio}</p>
        <p>{props.solicitudComprador}</p>
        
      </div>
    </div>
  )
}

export default Productcard