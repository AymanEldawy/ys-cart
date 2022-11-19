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
  componentDidMount() {
    this.setState({
      activeImage: this.props.selectedProduct?.images?.at(0),
    });
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
  // Gallery list change active img
  changeImageInGallery = (index) => {
    this.setState({
      activeImage: this.props.selectedProduct?.images?.at(index),
    });
  };

  addItemToCart = () => {
    this.props.addToCart({
      id: uuid(),
      productId: this.props.selectedProduct.id,
      quantity: this.state.quantity,
    });
  };

  // Gallery list control to go next
  nextImgInGallery = (imgIndex) => {
    let index = this.props.selectedProduct.images.indexOf(imgIndex);
    let len = this.props.selectedProduct.images.length - 1;

    if (index < len) index += 1;
    else index = 0;

    this.setState({
      activeImage: this.props.selectedProduct?.images?.at(index),
    });
  };
  // Gallery list control to go back
  prevImgInGallery = (imgIndex) => {
    let index = this.props.selectedProduct.images.indexOf(imgIndex);
    let len = this.props.selectedProduct.images.length - 1;
    if (index > 0) index -= 1;
    else index = len;

    this.setState({
      activeImage: this.props.selectedProduct?.images?.at(index),
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
              activeImage={this.state.activeImage}
              changeImageInGallery={this.changeImageInGallery}
              nextImgInGallery={this.nextImgInGallery}
              prevImgInGallery={this.prevImgInGallery}
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
