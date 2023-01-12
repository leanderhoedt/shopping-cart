import Head from 'next/head';
import {useDispatch} from 'react-redux';
import ShoppingCart from '../components/ShoppingCart';
import {addToCart} from '../store/cartSlice';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className="flex flex-col justify-center items-center h-full bg-gray-900">
        <button
          onClick={() => dispatch(addToCart())}
          className="absolute top-0 mb-5 bg-gray-50 rounded-md px-2 py-2"
        >
          ADD
        </button>
        <ShoppingCart/>
      </main>
    </>
  )
}

export default Home;
