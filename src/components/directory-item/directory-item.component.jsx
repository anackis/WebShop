import './directory-item.style.scss';
import React from 'react'


const DirectoryItem = ({category}) => {
  const {imageUrl, title} = category;
  return (
    <div  className="directory-item-container">
      {/* $ in this case allow us to use string inside another string  */}
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}/>
      <div className="directory-body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}

export default DirectoryItem;