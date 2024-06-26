/* eslint-disable react/prop-types */
import { Button } from "../button/button"
import './product-card.scss'

export function ProductCard ({ product }) {

  const { name, price, imageUrl } = product

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType="inverted">Add to Card</Button>
    </div>
  )

}