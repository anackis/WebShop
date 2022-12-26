
import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

import { CartItem as TCartItem } from '../../store/cart/cart.types';

import './cart-item.style.scss'

type CartItemProps = {
  cartItem: TCartItem;
}

const CartItem: FC<CartItemProps> = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));


  const calc = quantity*price;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <div className='item-details'>
        <span className='name'>{name}</span>
        {/* <span className='price'>{quantity} x ${price}</span> */}
        <span className='price'>{quantity}x = ${calc}</span>
        <div className='btn__container'>
          <div onClick={removeItemHandler} className='btn'>-1</div>
          <div onClick={addItemHandler} className='btn'>+1</div>
          <div onClick={clearItemHandler} className='btn'>&#10005;</div>
        </div>
      </div>
      
    </div>
  );
};

export default CartItem;