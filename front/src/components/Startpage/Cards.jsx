import React from 'react'
import './gridproducts.css'


function Cards( props ) {
return (


<div className='card'> 
<div className='cardImgBox'>
<img className='cardImg' src= {props.img} alt={props.nombre}></img>
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