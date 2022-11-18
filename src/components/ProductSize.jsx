import React from "react";

export const ProductSize = () => {
  const sizes = ["Small", "Medium", "Large", "X large", "XX large"];
  return (
    <div className="product-size">
      <h3>Size</h3>
      <div className="sizes">
        {sizes.map((size) => (
          <label key={size}>
            <input name="size" type="radio" value={size} />
            {size}
          </label>
        ))}
      </div>
    </div>
  );
};
