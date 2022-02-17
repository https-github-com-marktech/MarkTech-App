import React from 'react'
import './gridproducts.css'


function Cards( props ) {
return (
    <div className='card'> 
        <div className='cardImgBox'>
            <img className='cardImg' src= {props.product.image}></img>
        </div>
        <h3 className='cardTitle'>{props.product.name}</h3>
        <p>{props.product.description}</p>
        <p className='cardPrice'>{props.product.price}</p>
        <button className='cardButton'><a href='/Showproduct'>See more</a></button>
    </div>
)
}

export default Cards 