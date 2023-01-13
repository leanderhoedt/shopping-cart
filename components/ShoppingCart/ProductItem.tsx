import {useDispatch} from 'react-redux';
import {decrementQuantity, incrementQuantity, removeFromCart} from '../../store/cartSlice';

interface ProductItemProps {
  id: string;
  name: string;
  quantity: number;
  inStock: number;
}

const ProductItem = ({id, name, quantity, inStock}: ProductItemProps) => {
  const dispatch = useDispatch();
  return (
    <li className="py-4">
      <div className="flex items-center space-x-4">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900">
            <button
              className="mr-5 rounded h-8 px-2 text-gray-500 cursor-pointer hover:bg-gray-100"
              onClick={() => dispatch(removeFromCart(id))}
            >
              x
            </button>
            {name}
          </p>
        </div>
        <div>
          <div className="flex flex-row h-8 w-32 rounded-lg relative">
            <button
              disabled={quantity <= 1}
              className="text-gray-700 bg-gray-100 hover:text-gray-800 hover:bg-gray-200 disabled:bg-gray-50 h-full w-20 rounded-l cursor-pointer outline-none"
              onClick={() => dispatch(decrementQuantity({id}))}
            >
              <span className="m-auto text-2xl">-</span>
            </button>
            <span
              className="flex justify-center outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
            >{quantity}</span>
            <button
              disabled={quantity >= inStock}
              className="text-gray-700 bg-gray-100 hover:text-gray-800 hover:bg-gray-200 disabled:bg-gray-50 h-full w-20 rounded-r cursor-pointer"
              onClick={() => dispatch(incrementQuantity({id}))}
            >
              <span className="m-auto text-2xl">+</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ProductItem;
