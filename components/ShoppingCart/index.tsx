import Card from './Card';
import ProductItem from './ProductItem';
import ShoppingTotal from './ShoppingTotal';
import {useSelector} from "react-redux";
import {selectCartState} from "../../store/cartSlice";

const ShoppingCart = () => {
  const cart = useSelector(selectCartState);

  return (
    <Card>
      <h3 className="mb-5 text-lg font-medium leading-6 text-gray-900">
        Cart
      </h3>
      <div className="space-y-6 divide-y-2">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {
            cart?.cart?.map(({id, quantity, inStock}, index) =>
              <ProductItem
                key={`product-${index + id}`}
                id={id}
                quantity={quantity}
                name={`Product ${id}`}
                inStock={inStock}
              />
            )
          }
        </ul>
        <ShoppingTotal/>
      </div>
      <div className="justify-stretch mt-6 flex flex-col">
        <button
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2">
          Proceed checkout
        </button>
      </div>
    </Card>
  )
}

export default ShoppingCart;
