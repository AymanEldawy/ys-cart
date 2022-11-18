import React from "react";
import { ProductCard } from "./ProductCard";

export const SimilarProducts = ({ products, changeSelectedProduct }) => {
  return (
    <div className="products-similar">
      <h3>Similar Products</h3>
      <p>You may like these products also</p>
      <div className="products">
        {products.map((product, index) => {
          return (
            <>
              {index % 3 === 0 ? (
                <ProductCard
                  changeSelectedProduct={changeSelectedProduct}
                  product={product}
                  key={product.id}
                  discount={index * 3}
                />
              ) : (
                <ProductCard
                  changeSelectedProduct={changeSelectedProduct}
                  product={product}
                  key={product.id}
                  days={index * 2}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
