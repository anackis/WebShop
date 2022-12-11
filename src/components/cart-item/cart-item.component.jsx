import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-item.style.scss'

const CartItem = ({cartItem}) => {
  const { clearItemFromCart } = useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const {addItemToCart, removeItemToCart } = useContext(CartContext);
  const {name, imageUrl, price,  quantity} = cartItem;
  const calc = quantity*price;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <div className='item-details'>
        <span className='name'>{name}</span>
        {/* <span className='price'>{quantity} x ${price}</span> */}
        <span className='price'>{quantity}x = ${calc}</span>
        <div className='btn__container'>
          <div onClick={() => removeItemToCart(cartItem)} className='btn'>-1</div>
          <div onClick={() => addItemToCart(cartItem)} className='btn'>+1</div>
          <div onClick={() => clearItemHandler(cartItem)} className='btn'>&#10005;</div>
        </div>
      </div>
      
    </div>
  );
};

export default CartItem;