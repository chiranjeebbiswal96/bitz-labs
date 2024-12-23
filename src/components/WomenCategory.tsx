import React from "react";
import useFetch from "../hooks/useFetch"; // Import your custom hook
import ProductCard from "../utils/ProductCard";

const WomenCategory: React.FC = () => {
  const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products"); // Replace with your API URL

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3.5 p-3">
      
      {products.map((product) => (
        (product.category=="women's clothing"?<ProductCard
        key={product.id}
        image={product.image}
        rating={product.rating.rate}
        title={product.title}
        description={product.description}
        price={product.price}
        ele={product}
      />:"")
        
      ))}
    </div>
  );
};

export default WomenCategory;
