import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
}

function useWindowResize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowResize;


// Usage example in a component

// import React from "react";
// import useWindowResize from "./useWindowResize";

// const WindowSizeDisplay: React.FC = () => {
//   const { width, height } = useWindowResize();

//   return (
//     <div>
//       <h1>Window Dimensions</h1>
//       <p>Width: {width}px</p>
//       <p>Height: {height}px</p>
//     </div>
//   );
// };

// export default WindowSizeDisplay;