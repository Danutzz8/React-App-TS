import React, { useState, useEffect } from "react";
import "./index.scss";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const LoadMorePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState(0); // Tracks the number of API calls
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      if(data && data.products && data.products.length) {
        setProducts((prevProducts) => [...prevProducts, ...data.products]); // Append new products
        setLoading(false);
      }
    } catch (err) {
      setError("Failed to fetch products. Please try again.");
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (products.length < 100) {
      setCount((prevCount) => prevCount + 1); // Increment the count for the next API call
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  console.log(products.length);
  console.log(products[0]);
  
  return (
    <div className="load-more-page load-more-container m-auto lg:mt-4">
      <h1 className="text-center mb-4">Product Listing Page</h1>
      {error && <div className="error-message">{error}</div>}
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-thumbnail"
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button
          onClick={handleLoadMore}
          disabled={products.length >= 100 || loading} // Disable button if 100 products are loaded or loading
          className="load-more-button"
        >
            Load More Products
        </button><br/>
          {loading ? "Loading..." : products.length >= 100 ? "No More Products" : "Load More --- Loaded " + products.length + " Products"}
      </div>
    </div>
  );
};

export default LoadMorePage;