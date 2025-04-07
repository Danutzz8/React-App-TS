import React, { useEffect, useState } from "react";
import "./index.scss";

interface ScrollBarIndicatorProps {
  url: string;
}

const ScrollBarIndicator: React.FC<ScrollBarIndicatorProps> = ({ url }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [products, setProducts] = useState<string[]>([]);
  console.log("products", products);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / windowHeight) * 100;
      setScrollPosition(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("data", data);

        setProducts(
          data.products.map((product: { title: string }) => product.title)
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [url]);

  return (
    <div>
      <div className="top-container">
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPosition}%` }}
          ></div>
        </div>
      </div>
      {/* Scroll Indicator */}

      {/* Product Titles */}
      <div className="p-2 text-center pt-30">
        {products.map((title, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBarIndicator;
