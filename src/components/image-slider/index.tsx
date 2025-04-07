import React from "react";
import "./index.scss";
import { useState, useEffect } from "react";

interface ImageSliderProps {
  url: string;
  page?: string;
  limit?: string;
}

interface ImageData {
    id: string;
    author: string;
    download_url: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  url,
  page = "1",
  limit = "5",
}) => {
  const [images, setImages] =  useState<ImageData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const apiEndpoint = `${url}?page=${page}&limit=${limit}`; // Construct the API endpoint
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        if (data) {
          setImages(data);

            //setImages(data.map((item: { download_url: string }) => item.download_url)
            //   ); // Extract image URLs
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setErrorMsg(error.message);
        setLoading(false);
      }
    };

    fetchImages();
  }, [url, page, limit]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index); // Navigate to the selected slide
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <div className="image-slider container m-auto pt-4 lg:pt-0 lg:mt-4">
      <button onClick={prevSlide} className="arrow arrow-left">
        &#10094;
      </button>
      {images && images.length && (
        <img
          src={images[currentIndex].download_url}
          alt={images[currentIndex].author}
          className="current-image"
        />
      )}

      <button onClick={nextSlide} className="arrow arrow-right">
        &#10095;
      </button>
      {/* Dots for Image Indicators */}
      <div className="dots-container circle-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

// export default function ImageSlider({ url, limit = 5, page = 1 }) {
//   const [images, setImages] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [loading, setLoading] = useState(false);

//   async function fetchImages(getUrl) {
//     try {
//       setLoading(true);

//       const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
//       const data = await response.json();

//       if (data) {
//         setImages(data);
//         setLoading(false);
//       }
//     } catch (e) {
//       setErrorMsg(e.message);
//       setLoading(false);
//     }
//   }

//   function handlePrevious() {
//     setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
//   }

//   function handleNext() {
//     setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
//   }

//   useEffect(() => {
//     if (url !== "") fetchImages(url);
//   }, [url]);

//   console.log(images);

//   if (loading) {
//     return <div>Loading data ! Please wait</div>;
//   }

//   if (errorMsg !== null) {
//     return <div>Error occured ! {errorMsg}</div>;
//   }

//   return (
//     <div className="container">
//       <BsArrowLeftCircleFill
//         onClick={handlePrevious}
//         className="arrow arrow-left"
//       />
//       {images && images.length
//         ? images.map((imageItem, index) => (
//             <img
//               key={imageItem.id}
//               alt={imageItem.download_url}
//               src={imageItem.download_url}
//               className={
//                 currentSlide === index
//                   ? "current-image"
//                   : "current-image hide-current-image"
//               }
//             />
//           ))
//         : null}
//       <BsArrowRightCircleFill
//         onClick={handleNext}
//         className="arrow arrow-right"
//       />
//       <span className="circle-indicators">
//         {images && images.length
//           ? images.map((_, index) => (
//               <button
//                 key={index}
//                 className={
//                   currentSlide === index
//                     ? "current-indicator"
//                     : "current-indicator inactive-indicator"
//                 }
//                 onClick={() => setCurrentSlide(index)}
//               ></button>
//             ))
//           : null}
//       </span>
//     </div>
//   );
// }
