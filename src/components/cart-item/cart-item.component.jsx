
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

import './cart-item.style.scss'

const CartItem = ({cartItem}) => {
  const {name, imageUrl, price,  quantity} = cartItem;
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
          <div onClick={() => removeItemHandler(cartItem)} className='btn'>-1</div>
          <div onClick={() => addItemHandler(cartItem)} className='btn'>+1</div>
          <div onClick={() => clearItemHandler(cartItem)} className='btn'>&#10005;</div>
        </div>
      </div>
      
    </div>
  );
};

export default CartItem;