import React, { useState } from "react";

const ShopImageList = () => {
  // State to track the currently selected set of images
  const [selectedImages, setSelectedImages] = useState([]);

  // List of items with multiple images for each
  const shopItems = [
    {
      id: 1,
      label: "ALL",
      images: [
        "Hat1.svg",
        "Hat2.svg",
        "Lanyard1.png",
        "Lightstick1.svg",
        "Lightstick2.svg",
        "Lightstick3.svg",
        "Shirt1.svg",
        "Shirt2.svg",
      ], // Image paths from public/Shop
    },
    {
      id: 2,
      label: "HAT",
      images: ["Hat1.svg", "Hat2.svg"],
    },
    {
      id: 3,
      label: "T-SHIRT",
      images: ["Shirt1.svg", "Shirt2.svg"],
    },
    {
      id: 4,
      label: "LANYARD",
      images: ["Lanyard1.png"],
    },
    {
      id: 5,
      label: "LIGHTSTICK",
      images: ["Lightstick1.svg", "Lightstick2.svg", "Lightstick3.svg"],
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
