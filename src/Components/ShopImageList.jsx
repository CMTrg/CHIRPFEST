import React, { useState } from "react";
/* import Hat1 from "./assets/Shop/Hat1.svg";
import Hat2 from "./assets/Shop/Hat2.svg";
import Lanyard1 from "./src/assets/Shop/Lanyard1.svg";
import Lightstick1 from "./src/assets/Shop/Lightstick1.svg";
import Lightstick2 from "./src/assets/Shop/Lightstick2.svg";
import Lightstick3 from "./src/assets/Shop/Lightstick3.svg";
import Shirt1 from "./src/assets/Shop/Shirt1.svg";
import Shirt2 from "./src/assets/Shop/Shirt2.svg"; */
const ShopImageList = () => {
  // State to track the currently selected set of images
  const [selectedImages, setSelectedImages] = useState([]);

  // List of items with multiple images for each
  const shopItems = [
    {
      id: 1,
      label: "ALL",
      images: [
        "./Shop/Hat1.svg",
        "./Shop/Hat2.svg",
        "./Shop/Lanyard1.png",
        "./Shop/Lightstick1.svg",
        "./Shop/Lightstick2.svg",
        "./Shop/Lightstick3.svg",
        "./Shop/Shirt1.svg",
        "./Shop/Shirt2.svg",
      ], // Replace with your image paths
    },
    {
      id: 2,
      label: "HAT",
      images: ["./Shop/Hat1.svg", "./Shop/Hat2.svg"],
    },
    {
      id: 3,
      label: "T-SHIRT",
      images: ["./Shop/Shirt1.svg", "./Shop/Shirt2.svg"],
    },
    {
      id: 4,
      label: "LANYARD",
      images: ["./Shop/Lanyard1.png"],
    },
    {
      id: 5,
      label: "LIGHTSTICK",
      images: [
        "./Shop/Lightstick1.svg",
        "./Shop/Lightstick2.svg",
        "./Shop/Lightstick3.svg",
      ],
    },
  ];

  // Function to handle button clicks
  const handleClick = (images) => {
    setSelectedImages(images); // Set the selected set of images
  };

  return (
    <div className="shop-list-container">
      <div className="shop-button-list">
        {shopItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.images)}
            className="shop-list-button"
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="shop-image-grid">
        {selectedImages.length > 0 ? (
          selectedImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Selected ${index}`}
              className="shop-grid-image"
            />
          ))
        ) : (
          <p id="ShopList-p">Please select an item to see the images !!!</p>
        )}
      </div>
    </div>
  );
};

export default ShopImageList;
