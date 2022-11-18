import React from "react";

export const ProductColor = () => {
  const colors = ["red", "green", "blue", "black"];
  return (
    <div className="product-color">
      <h3>color</h3>
      <div className="colors">
        {colors.map((color) => (
          <label key={color} style={{ background: color }}>
            <input name="color" type="radio" value={color} />
          </label>
        ))}
      </div>
    </div>
  );
};
