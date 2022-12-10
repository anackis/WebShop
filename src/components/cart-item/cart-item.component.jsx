

import './cart-item.style.scss'

const CartItem = ({cartItem}) => {
  const {name, imageUrl, price,  quantity} = cartItem;
  const calc = quantity*price;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <div className='item-details'>
        <span className='name'>{name}</span>
        {/* <span className='price'>{quantity} x ${price}</span> */}
        <span className='price'>{quantity}x = ${calc}</span>
      </div>
      
    </div>
  );
};

export default CartItem;