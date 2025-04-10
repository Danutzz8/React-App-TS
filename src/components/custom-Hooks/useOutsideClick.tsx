import { useEffect } from "react";

function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    function listener(event: MouseEvent | TouchEvent): void {
      // Check if the ref is not set or if the click is inside the element
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}

export default useOutsideClick;

//use case

// import React, { useRef, useState } from "react";
// import useOutsideClick from "./useOutsideClick";

// const Dropdown: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useOutsideClick(dropdownRef, () => {
//     setIsOpen(false);
//   });

//   return (
//     <div>
//       <button onClick={() => setIsOpen((prev) => !prev)}>Toggle Dropdown</button>
//       {isOpen && (
//         <div ref={dropdownRef} className="dropdown">
//           <p>Dropdown Content</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;