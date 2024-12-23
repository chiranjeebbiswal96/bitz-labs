import React from "react";
import back from "../assets/back.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers/main";
import { REMOVE, INCREMENT, DECREMENT, CLEAR_CART } from "../redux/actions/action";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.carts);

  const handleRemove = (id: number) => {
    dispatch(REMOVE(id));
  };

  const handleIncrement = (id: number) => {
    dispatch(INCREMENT(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(DECREMENT(id));
  };

  const handleClearCart = () => {
    dispatch(CLEAR_CART()); // Action to clear the cart
  };

  const handleProceedToCheckout = () => {
    alert("Items are dispatched successfully!"); // Show alert
    handleClearCart(); // Clear the cart from Redux
    navigate("/"); // Navigate to the first screen (home page or product page)
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.05; // Assuming a 5% discount
  const orderTotal = subtotal - discount;

  return (
    <div className="flex flex-wrap justify-center h-[812px]">
      <div className="w-[375px] md:w-1/2 lg:w-1/4 bg-[#171616] rounded-custom-xl text-white">
        <Link to="/">
          <img src={back} alt="Go Back" className="w-[7px] h-[14px] mt-10 ml-5 " />
        </Link>
        <h1 className="text-4xl font-semibold mb-6 text-start text-white p-4 mt-[38px]">Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-4xl font-semibold mb-6 text-center text-red-300 mt-[100px]">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-2 gap-2 rounded-lg mb-10 w-[320px] mx-2 h-[96px] bg-[#393939] "
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 rounded-md object-cover mr-3"
              />
              {/* Details Section */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-medium text-[#FCF9F2]">Item:</h4>
                  <p className="text-xs text-[#FCF9F2]">${item.price}</p>
                </div>
                <h4 className="text-sm font-bold text-[#FCF9F2] mb-2">
                  {item.title.length > 15
                    ? `${item.title.slice(0, 15)}...`
                    : item.title}
                </h4>
                <div className="border-t text-[#FCF9F2]"></div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-[#FCF9F2]">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="flex items-center ml-4">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="w-4 h-4 border-[1px] border-[#696969] text-[#FCF9F2] rounded-full flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="mx-2 text-sm font-bold text-[#F9D035]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="w-4 h-4 border-[1px] border-[#F9D035] text-[#FCF9F2] rounded-full flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-xs text-[#FF7777]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <div className="justify-between items-center p-2 gap-2 rounded-lg mb-10 w-[320px] mx-2 h-[96px] ">
            <div className="flex justify-between text-[#FCF9F2] mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[#FCF9F2] mb-3">
              <span>Discount (5%)</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="border-t text-[#FCF9F2] mb-2"></div>
            <div className="flex justify-between text-[#FCF9F2] font-bold text-lg">
              <span>Order Total</span>
              <span>${orderTotal.toFixed(2)}</span>
            </div>
            <button
              onClick={handleProceedToCheckout}
              className="w-full bg-gradient-to-r from-[#F9D03F] to-[#E9B32A] text-black py-2 rounded-lg mt-4 font-semibold"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
