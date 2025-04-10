import React from "react";
import useFetch from "../custom-Hooks/useFetch";
import useScrollTo from "../custom-Hooks/useScrollTo";
import useWindowResize from "../custom-Hooks/useWindowResize";

interface UrlProps {
  url: string;
}

interface Product {
  title: string; // Add other fields if needed
}

interface ApiResponse {
  products: Product[];
}

const WindowSizeDisplay: React.FC = () => {
    const { width, height } = useWindowResize();
  
    return (
      <div>
        <h1>Window Dimensions</h1>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
      </div>
    );
  };

const CustomHooks: React.FC<UrlProps> = ({ url }) => {
  const { data, loading, error } = useFetch<ApiResponse>(url); // Use useFetch to fetch product names
  const { scrollToTop, scrollToBottom } = useScrollTo(); // Use useScrollTo for scrolling
  
  const products = data?.products || [];

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <button onClick={scrollToBottom} className="fixed">Scroll to Bottom hook</button>
      <div className="p-2 text-right pt-10 pr-20">
        <span className="text-xl font-bold text-blue-600/50">Custom hook</span>
        <WindowSizeDisplay />
      </div>
      {/* Product Titles */}
      <div className="p-2 text-center pt-30">
        <span className="text-2xl font-bold text-blue-600/50">Fetch custom Hook</span>
        {products?.map((product, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            {product.title}
          </div>
        ))}
      </div>

      {/* Scroll Buttons */}
        <button onClick={scrollToTop} className="fixed bottom-4 right-4 px-4 py-2 rounded">
          Scroll to Top hook
        </button>
    </div>
  );
};

export default CustomHooks;