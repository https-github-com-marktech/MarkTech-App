import React from 'react'
import './gridproducts.css'
import {Link} from 'react-router-dom';

function Cards( props ) {
<<<<<<< HEAD
    return (
        <div className='card'> 
            <div className='cardImgBox'>
                <img className='cardImg' src= {props.product.image} alt={props.product.name}></img>
            </div>
            <h3 className='cardTitle'>{props.product.name}</h3>
            <p>{props.product.description}</p>
            <p className='cardPrice'>{props.product.price}$</p>
            <Link to={`/Showproduct/${props.product.id}`} className='cardButton'>See more</Link>
        </div>
    )
    }
    
    export default Cards
    
=======
return (


<div className='card'> 
<div className='cardImgBox'>
<img className='cardImg' src= {props.img}></img>
</div>
<h3 className='cardTitle'>{props.nombre}</h3>
<p>{props.descripcion}</p>
<p className='cardPrice'>{props.precio}</p>
<p>{props.solicitudComprador}</p>
<a href='/Showproduct'><button className='cardButton'>See more</button></a>
</div>

)
}

export default Cards 
>>>>>>> 333a001980696d3c5f805fc6ff64497d6b8902c9
