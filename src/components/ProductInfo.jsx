import React from "react";
import { ProductCallToAction } from "./ProductCallToAction";
import { ProductColor } from "./ProductColor";
import { ProductPrice } from "./ProductPrice";
import { ProductQuantity } from "./ProductQuantity";
import { ProductRate } from "./ProductRate";
import { ProductSize } from "./ProductSize";

export const ProductInfo = ({
  product,
  quantity,
  increment,
  decrement,
  addItemToCart,
}) => {
  return (
    <div className="product-info">
      <img
        className="product-category-view"
        src={product?.category?.image}
        alt={product?.category?.name}
      />
      <h2>{product?.title}</h2>
      <h3>{product?.category?.name}</h3>
      <ProductRate />
      <ProductPrice price={product.price} discount="30" />
      <ProductSize />
      <ProductColor />
      <ProductQuantity
        quantity={quantity}
        increment={increment}
        decrement={decrement}
      />
      <ProductCallToAction addItemToCart={addItemToCart} />
    </div>
  );
};
