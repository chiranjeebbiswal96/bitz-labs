import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ADD } from "../redux/actions/action";

interface ProductCardProps {
  image: string;
  rating: number;
  title: string;
  description: string;
  price: number;
  ele: {
    id: number;
    category: string;
    image: string;
    rating: { rate: number; count: number };
    title: string;
    description: string;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  rating,
  title,
  description,
  price,
  ele,
}) => {
  const dispatch = useDispatch();

  
  const send = (ele: ProductCardProps["ele"], event: React.MouseEvent) => {
    event.stopPropagation(); 
    dispatch(ADD(ele)); 
  };

  return (
    <div className="bg-[#1F1F1F] p-3 m-1 rounded-xl shadow-md">
      
      <Link to={`/products/${ele.id}`}>
        <div className="flex justify-center mb-1">
          <img src={image} alt={title} className="h-20 w-24" />
        </div>
        <div className="mt-2 text-start">
          <div className="flex items-center justify-start">
            <span className="text-lg">⭐</span>
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
          <h2 className="mt-1 text-sm font-semibold text-white">
            {title.length > 11 ? `${title.slice(0, 11)}...` : title}
          </h2>
          <p className="text-sm text-gray-400">
            {description.length > 16 ? `${description.slice(0, 16)}...` : description}
          </p>
        </div>
      </Link>
      <div className="flex items-center justify-between mt-2 gap-1">
        <span className="text-sm font-bold text-white">${price}</span>
        
        <button
          onClick={(e) => send(ele, e)} 
          className="text-yellow-400 text-xl w-8 h-8 flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
