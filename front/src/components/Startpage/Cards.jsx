import React from 'react'
import './gridproducts.css'
import {Link} from 'react-router-dom';

function Cards( props ) {
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
    
