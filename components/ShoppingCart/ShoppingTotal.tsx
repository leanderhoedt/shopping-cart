import {useSelector} from 'react-redux';
import {selectCartState} from '../../store/cartSlice';

const ShoppingTotal = () => {
  const cart = useSelector(selectCartState);
  const getTotal = () => {
    let total = 0;
    cart?.cart?.forEach(({price, quantity}) => total += price * quantity);
    return total;
  }
  return (
    <div className="pt-5 flex justify-between">
      <span className="font-semibold text-1xl">Total</span>
      <span className="font-bold text-1xl">€{' '}<span>{getTotal()}</span></span>
    </div>
  )
}

export default ShoppingTotal;
