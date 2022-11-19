import React from "react";

// Images
import productView from "../images/product/product-view.svg";

export const ProductGallery = ({
  product: { images },
  changeImageInGallery,
  activeImage,
  nextImgInGallery,
  prevImgInGallery,
}) => {
  return (
    <div className="product-gallery">
      <figure>
        <span className="product-view">
          <img src={productView} alt="product view" />
        </span>
        <img src={activeImage} alt="" />
      </figure>
      <div className="gallery">
        <div className="gallery-list">
          {images && images.map((src, index) => (
            <img
              src={src}
              alt="product images "
              key={src}
              className={activeImage === src ? "active-image" : ""}
              onClick={() => changeImageInGallery(index)}
            />
          ))}
        </div>
        <div className="gallery-controls">
          <button
            className="gallery-control-left"
            onClick={() => prevImgInGallery(activeImage)}
          >
            <img src="images/arrow-left.svg" alt="gallery-control-left" />
          </button>
          <button
            className="gallery-control-right"
            onClick={() => nextImgInGallery(activeImage)}
          >
            <img src="images/arrow-right.svg" alt="gallery-control-right" />
          </button>
        </div>
      </div>
    </div>
  );
};
