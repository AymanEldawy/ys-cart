import React from "react";

// Images
import productView from "../images/product/product-view.svg";
import { ProductDelivery } from "./ProductDelivery";
import { ProductPrice } from "./ProductPrice";
import { ProductRate } from "./ProductRate";

export const ProductCard = ({
  product,
  days,
  discount,
  changeSelectedProduct,
}) => {
  return (
    <div
      className="product-card"
      onClick={() => changeSelectedProduct(product.id)}
    >
      <figure className="product-card-img">
        <span className="product-view">
          <img src={productView} alt="product view" />
        </span>
        <img src={product?.images?.at(0)} alt="" />
      </figure>
      <div className="product-card-body">
        <h4 className="product-card-title">
          <a href="#">{product?.title}</a>
        </h4>
        <div className="product-card-price">
          <ProductPrice price={product.price} discount={discount} />
          <figure className="product-category-img">
            <img src={product?.category?.image} alt={product?.category?.name} />
          </figure>
        </div>
        <div className="product-card-rate">
          <ProductRate />
        </div>
        <ProductDelivery days={days} />
      </div>
    </div>
  );
};
