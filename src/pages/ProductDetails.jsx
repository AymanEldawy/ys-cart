import React, { Component } from "react";
import { uuid } from "uuidv4";

// Components
import { Breadcrumb } from "../components/Breadcrumb";
import { ProductGallery } from "../components/ProductGallery";
import { ProductInfo } from "../components/ProductInfo";
import { SimilarProducts } from "../components/SimilarProducts";

// Styles
import "../styles/products.scss";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  // Increment quantity
  increment = () => {
    if (this.state.quantity >= 5) return; // max 5 items in one order
    this.setState({
      quantity: +this.state.quantity + 1,
    });
  };
  // decrement quantity
  decrement = () => {
    if (this.state.quantity === 1) return;
    this.setState({
      quantity: +this.state.quantity - 1,
    });
  };

  addItemToCart = () => {
    this.props.addToCart({
      id: uuid(),
      productId: this.props.selectedProduct.id,
      quantity: this.state.quantity,
    });
  };

  render() {
    return (
      <>
        <Breadcrumb productPath={this.props.selectedProduct} />
        <div className="container">
          <div className="product">
            <ProductGallery
              product={this.props.selectedProduct}
              activeImage={this.props.activeImage}
              changeImageInGallery={this.props.changeImageInGallery}
              nextImgInGallery={this.props.nextImgInGallery}
              prevImgInGallery={this.props.prevImgInGallery}
            />
            <ProductInfo
              quantity={this.state.quantity}
              increment={this.increment}
              decrement={this.decrement}
              product={this.props.selectedProduct}
              addItemToCart={this.addItemToCart}
            />
          </div>
          <SimilarProducts
            products={this.props.products}
            changeSelectedProduct={this.props.changeSelectedProduct}
          />
        </div>
      </>
    );
  }
}

export default ProductDetails;
