/* import "./product.module.css";
// import Laptop from '../images/laptop-33521_1280.png'

function Productcard(props) {
  return (

    <div className="container">
      <div className='card'>
        <div className='cardImgBox'>
        <img className='cardImg' src= {props.img} alt={props.name}></img>
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
 */


import "../Product/Product.module.css";
// import { useEffect} from "react";
import { useParams } from "react-router-dom";
// import { getProductId } from "../../service/productService";

function Productcard(props) {

  let { id } = useParams();
    
  return (
    <div className="container">
        <h1>id es {props.product.id}{id}</h1> 
    </div>
  )
}

export default Productcard
