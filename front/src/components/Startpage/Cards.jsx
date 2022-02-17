import React from 'react'
import './gridproducts.css'


function Cards( props ) {
return (


<div className='card'> 
<div className='cardImgBox'>
<img className='cardImg' src= {props.img}></img>
</div>
<h3 className='cardTitle'>{props.nombre}</h3>
<p>{props.descripcion}</p>
<p className='cardPrice'>{props.precio}</p>
<p>{props.solicitudComprador}</p>
<button className='cardButton'><a href='/Showproduct'>See more</a></button>
</div>

)
}

export default Cards 