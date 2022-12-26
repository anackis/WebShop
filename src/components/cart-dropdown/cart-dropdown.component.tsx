
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selector';
import './cart-dropdown.style.scss';




import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component'; 

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-item'>
        {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
        
      </div>
      <Button className='button-container checkout-button' type='submit' onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;