import ReactDOM from 'react-dom';
import { CartContext } from './CartContext.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';

const Cartshop = () => {
 
 
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

    
  return (
          
 
  <div className="cart-widget">
      
      <FontAwesomeIcon icon={faShoppingCart} size="1x" color="white" />
      <div className="qty-display">0 </div>
    </div>
 
  );
};

export default Cartshop;