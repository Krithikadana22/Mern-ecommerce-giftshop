import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        Welcome to Enchanted Trinkets, a magical haven where every gift tells a story. Nestled in the heart of your loved ones, our boutique is more than just a shop – it's an experience of wonder and delight.

Step into our whimsical world and discover an array of treasures that are sure to captivate your imagination. From ethereal charms that sparkle with elegance to mystical trinkets that hold ancient wisdom, each item in our collection is carefully curated to bring joy and meaning to both the giver and the receiver.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., varieties, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
