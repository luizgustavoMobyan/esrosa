/* eslint-disable react/prop-types */
import { Category } from "../category/category";
import './categories.scss';

export function Categories( { categories } ){
  
  return (
    <div className="categories-container">
      {
        categories.map((category) => {
          return (
            <Category key={category.id} category={category} />
          )
        })
      }
    </div>
  )
}