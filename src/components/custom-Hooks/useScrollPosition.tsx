import { useState, useEffect } from "react";

interface ScrollPosition {
  scrollY: number;
  isTop: boolean;
  isBottom: boolean;
}

function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: window.scrollY,
    isTop: window.scrollY === 0,
    isBottom: window.innerHeight + window.scrollY >= document.body.offsetHeight,
  });

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const isTop = scrollY === 0;
      const isBottom =
        window.innerHeight + scrollY >= document.body.offsetHeight;

      setScrollPosition({ scrollY, isTop, isBottom });
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;

// Usage example in a component
// import React from "react";
// import useScrollPosition from "./useScrollPosition";

// const ScrollTracker: React.FC = () => {
//   const { scrollY, isTop, isBottom } = useScrollPosition();

//   return (
//     <div>
//       <h1>Scroll Position</h1>
//       <p>Scroll Y: {scrollY}px</p>
//       <p>{isTop ? "You are at the top of the page." : ""}</p>
//       <p>{isBottom ? "You are at the bottom of the page." : ""}</p>
//     </div>
//   );
// };

// export default ScrollTracker;