import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Card.module.css'

export default function Card({name, img, id, price, type, color, handleAddCart}) {



  return (
    <div className={styles.card} >
        <Link to={`/detail/${id}`}><h5>{name}</h5></Link>
        
        <div className={styles.imageContainer}>
          <img src={img} alt="imagen" />
        </div>
  
        <p>${price}</p>
        <p>{type}</p>
        <p>{color}</p>
        <button value={id} onClick={(e) => handleAddCart(e)}>ADD TO CART</button>

    </div>
  )
}
