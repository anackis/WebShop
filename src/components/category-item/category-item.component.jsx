import './category-item.style.scss';
import React from 'react'


const CategoryItem = ({category}) => {
  const {imageUrl, title} = category;
  return (
    <div  className="category-container">
      {/* $ in this case allow us to use string inside another string  */}
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}/>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}

export default CategoryItem