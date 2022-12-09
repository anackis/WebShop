import { useContext } from 'react';

import './cart-dropdown.style.scss';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component'; 

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-item'>
        {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button >GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;