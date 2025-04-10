import { useCallback } from "react";

function useScrollTo() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  }, []);

  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Smooth scrolling
    });
  }, []);

  return { scrollToTop, scrollToBottom };
}

export default useScrollTo;

// Usage example in a component

// import React from "react";
// import useScrollTo from "./useScrollTo";

// const ScrollButtons: React.FC = () => {
//   const { scrollToTop, scrollToBottom } = useScrollTo();

//   return (
//     <div style={{ height: "200vh", padding: "20px" }}>
//       <button onClick={scrollToTop} style={{ marginRight: "10px" }}>
//         Scroll to Top
//       </button>
//       <button onClick={scrollToBottom}>Scroll to Bottom</button>
//     </div>
//   );
// };

// export default ScrollButtons;