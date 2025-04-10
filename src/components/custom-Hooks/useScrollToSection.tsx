import { useCallback } from "react";

function useScrollToSection() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align to the top of the section
      });
    }
  }, []);

  return { scrollToSection };
}

export default useScrollToSection;

// Usage example in a component

// import React from "react";
// import useScrollToSection from "../custom-Hooks/useScrollToSection";

// const ScrollToSectionExample: React.FC = () => {
//   const { scrollToSection } = useScrollToSection();

//   return (
//     <div>
//       {/* Buttons to Scroll to Sections */}
//       <div style={{ marginBottom: "20px" }}>
//         <button onClick={() => scrollToSection("section1")} style={{ marginRight: "10px" }}>
//           Go to Section 1
//         </button>
//         <button onClick={() => scrollToSection("section2")} style={{ marginRight: "10px" }}>
//           Go to Section 2
//         </button>
//         <button onClick={() => scrollToSection("section3")}>
//           Go to Section 3
//         </button>
//       </div>

//       {/* Sections */}
//       <div id="section1" style={{ height: "100vh", backgroundColor: "#f8b400", padding: "20px" }}>
//         <h2>Section 1</h2>
//         <p>This is Section 1.</p>
//       </div>
//       <div id="section2" style={{ height: "100vh", backgroundColor: "#6a0572", padding: "20px", color: "#fff" }}>
//         <h2>Section 2</h2>
//         <p>This is Section 2.</p>
//       </div>
//       <div id="section3" style={{ height: "100vh", backgroundColor: "#0f4c75", padding: "20px", color: "#fff" }}>
//         <h2>Section 3</h2>
//         <p>This is Section 3.</p>
//       </div>
//     </div>
//   );
// };

// export default ScrollToSectionExample;