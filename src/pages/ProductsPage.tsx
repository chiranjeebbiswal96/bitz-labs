import React from 'react';
import Navbar from '../components/Navbar';
import CartLogo from '../assets/CartIcon.png';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers/main";

const ProductsPage: React.FC = () => {

  const cartItems = useSelector((state: RootState) => state.cart.carts);
  console.log(cartItems)

  return (
    <div className='flex flex-wrap justify-center h-[812px]'>
      <div className='sm:w-[375px] md:w-1/2 lg:w-1/4 bg-[#171616] rounded-custom-xl text-white'>
        <div className='flex justify-end py-10 pr-8'>
          
          <Link to={cartItems.length > 0 ? "/cart" : "#"}>
            <div className='relative'>
              <img src={CartLogo} alt='cart' className='w-7' />
              {cartItems.length > 0 && (
                <div className='absolute bottom-6 left-5   w-4 h-4 bg-[#FF0000] text-white text-xs font-bold rounded-full flex items-center justify-center'>
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>
        </div>
        <div>
          <h1 className='font-lato text-36px leading-43.2 px-4 pb-1'>Product List</h1>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default ProductsPage;
