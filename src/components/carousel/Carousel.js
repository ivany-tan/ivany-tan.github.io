import React, { useEffect, useState } from "react";
import "./Carousel.css";

const images = [
  { src: "https://placehold.co/1280x720?text=01", alt: "1" },
  { src: "https://placehold.co/1280x720?text=02", alt: "2" },
  { src: "https://placehold.co/1280x720?text=03", alt: "3" },
  { src: "https://placehold.co/1280x720?text=04", alt: "4" },
  { src: "https://placehold.co/1280x720?text=05", alt: "5" },
  { src: "https://placehold.co/1280x720?text=06", alt: "6" },
  { src: "https://placehold.co/1280x720?text=07", alt: "7" },
  { src: "https://placehold.co/1280x720?text=08", alt: "8" },
  // { src: "https://placehold.co/1280x720?text=09", alt: "9" },
  // { src: "https://placehold.co/1280x720?text=10", alt: "10" },
  // { src: "https://placehold.co/1280x720?text=11", alt: "11" },
  // { src: "https://placehold.co/1280x720?text=12", alt: "12" },
  // { src: "https://placehold.co/1280x720?text=13", alt: "13" },
  // { src: "https://placehold.co/1280x720?text=14", alt: "14" },
];

// const CarouselItem = ({ title, desc, tutor, price }) => {};

function Carousel() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(5);

  useEffect(() => {
    const updateItemsPerScreen = () => {
      if (window.innerWidth <= 600) {
        setItemsPerScreen(2);
      } else if (window.innerWidth <= 992) {
        setItemsPerScreen(3);
      } else if (window.innerWidth <= 1280) {
        setItemsPerScreen(4);
      } else {
        setItemsPerScreen(5);
      }
    };

    // Set the initial value on mount
    updateItemsPerScreen();
    // Add event listener for window resize
    window.addEventListener("resize", updateItemsPerScreen);
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", updateItemsPerScreen);
  }, []);

  // This will give you the total number of slides
  //   const slidesCount = Math.ceil(images.length / itemsPerScreen);
  const slidesCount = Math.ceil(images.length);

  const handleControlClick = (direction) => {
    if (direction === "left") {
      setSliderIndex((prevIndex) =>
        prevIndex > 0
          ? prevIndex - itemsPerScreen
          : slidesCount - itemsPerScreen
      );
    } else if (direction === "right") {
      setSliderIndex((prevIndex) =>
        prevIndex < slidesCount - itemsPerScreen
          ? prevIndex + itemsPerScreen
          : 0
      );
    }
  };

  const sliderStyle = {
    transform: `translateX(-${sliderIndex * (100 / itemsPerScreen)}%)`,
  };

  // Determine if the right button should be disabled
  //   const isRightButtonDisabled = sliderIndex >= slidesCount - 1;
  const isRightButtonDisabled = sliderIndex >= slidesCount - itemsPerScreen;

  return (
    <div className="row-container">
      <div class="header">
        <h3 class="row-title">Title</h3>
        {/* <div class="progress-bar">Full List</div> */}
      </div>
      <div className="carousel-container">
        <button
          className="handle left-handle"
          onClick={() => handleControlClick("left")}
          disabled={sliderIndex === 0}
        >
          <div className="text">&#8249;</div>
        </button>
        <div className="slider" style={sliderStyle}>
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </div>

        <button
          className="handle right-handle"
          onClick={() => handleControlClick("right")}
          disabled={isRightButtonDisabled}
        >
          <div className="text">&#8250;</div>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
