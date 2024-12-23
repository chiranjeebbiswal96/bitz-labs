import React, { useState } from "react";
import { useParams,Link } from "react-router-dom";
import back from "../assets/back.png";
import useFetch from "../hooks/useFetch"; // Custom hook for fetching data
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action"; // Import ADD action

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products"); // Replace with your API URL
  const dispatch = useDispatch();

  // State for the quantity of the product
  const [quantity, setQuantity] = useState(1);

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  const product = products.find((prod: any) => prod.id === parseInt(id || ""));

  if (!product) {
    return <p className="text-center text-white">Product not found.</p>;
  }

  // Function to add product to the cart with the selected quantity
  const addToCart = () => {
    dispatch(ADD({ ...product, quantity }));
  };

  // Function to adjust quantity (increment or decrement)
  const adjustQuantity = (action: "increment" | "decrement") => {
    if (action === "increment") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Calculate the total price based on the quantity
  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className="flex flex-wrap justify-center h-[812px]">
      <div className="w-[375px] md:w-1/2 lg:w-1/4 bg-[#171616] rounded-custom-xl text-white p-5">
      <Link to="/" ><img src={back} alt="Go Back"className="w-[7px] h-[14px] mt-10 ml-5 "/></Link>
        <div className="flex justify-center mt-[80px]">
          <img src={product.image} alt={product.title} className="w-[315px] h-[280px]" />
        </div>
        <h1 className="text-lg font-bold mb-2 mt-[25px]">{product.title}</h1>
        <div className="flex justify-start items-start space-x-4 w-full mb-4">
          <span className="text-[#FCF9F2]  text-sm font-thin">{product.description.length > 100 ? `${product.description.slice(0, 100)}...` : product.description}</span>
          <span className="text-yellow-400 flex items-start mr-3">
            ⭐ <span className="ml-1">{product.rating.rate}</span>
          </span>
        </div>

        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => adjustQuantity("decrement")}
              className="w-6 h-6 border-[1px] border-[#696969] text-[#FCF9F2] rounded-full flex items-center justify-center"
            >
              -
            </button>
            <span className="text-[#F9D035] font-bold">{quantity}</span>
            <button
              onClick={() => adjustQuantity("increment")}
              className="w-6 h-6 border-[1px] border-[#F9D035] text-[#FCF9F2] rounded-full flex items-center justify-center"
            >
              +
            </button>
          </div>
          <span className="text-lg font-bold text-white">${totalPrice}</span> 
        </div>

       <Link to="/cart"> <button
          onClick={addToCart}
          className="w-full bg-gradient-to-r from-[#F9D03F] to-[#E9B32A] text-black py-2 rounded-lg mt-4 font-semibold"
        >
          Add to Cart
        </button></Link>
      </div>
    </div>
  );
};

export default ProductDetailPage;
