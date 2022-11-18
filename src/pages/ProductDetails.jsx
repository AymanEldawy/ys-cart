import React, { Component } from "react";
import { uuid } from "uuidv4";

// Components
import { Breadcrumb } from "../components/Breadcrumb";
import { ProductGallery } from "../components/ProductGallery";
import { ProductInfo } from "../components/ProductInfo";
import { SimilarProducts } from "../components/SimilarProducts";

// Styles
import "../styles/products.scss";

// Service
import { getAllProducts } from "../services/FetchProducts";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedProduct: {},
      quantity: 1,
      activeImage: null,
    };
  }

  componentDidMount() {
    getAllProducts().then((data) => {
      this.setState({
        products: data, // set products
        selectedProduct: data[0], // selected first product
        activeImage: data[0].images[0], // selected first image in selected product
      });
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
      activeImage: this.state.selectedProduct?.images?.at(index),
    });
  };

  addItemToCart = () => {
    this.props.addToCart({
      id: uuid(),
      productId: this.state.selectedProduct.id,
      quantity: this.state.quantity,
      discount: 30,
    });
  };

  // Gallery list control to go next
  nextImgInGallery = (imgIndex) => {
    let index = this.state.selectedProduct.images.indexOf(imgIndex);
    let len = this.state.selectedProduct.images.length - 1;

    if (index < len) index += 1;
    else index = 0;

    this.setState({
      activeImage: this.state.selectedProduct?.images?.at(index),
    });
  };
  // Gallery list control to go back
  prevImgInGallery = (imgIndex) => {
    let index = this.state.selectedProduct.images.indexOf(imgIndex);
    let len = this.state.selectedProduct.images.length - 1;
    if (index > 0) index -= 1;
    else index = len;

    this.setState({
      activeImage: this.state.selectedProduct?.images?.at(index),
    });
  };

  changeSelectedProduct = (productId) => {
    let newSelectedProduct = this.state.products.filter(
      (product) => product.id === productId
    )[0];
    if (newSelectedProduct) {
      this.setState({
        selectedProduct: newSelectedProduct,
        activeImage: newSelectedProduct.images[0],
      });
    }
    this.setState({
      quantity: 1,
    });
  };

  render() {
    return (
      <>
        <Breadcrumb productPath={this.state.selectedProduct} />
        <div className="container">
          <div className="product">
            <ProductGallery
              product={this.state.selectedProduct}
              activeImage={this.state.activeImage}
              changeImageInGallery={this.changeImageInGallery}
              nextImgInGallery={this.nextImgInGallery}
              prevImgInGallery={this.prevImgInGallery}
            />
            <ProductInfo
              quantity={this.state.quantity}
              increment={this.increment}
              decrement={this.decrement}
              product={this.state.selectedProduct}
              addItemToCart={this.addItemToCart}
            />
          </div>
          <SimilarProducts
            products={this.state.products}
            changeSelectedProduct={this.changeSelectedProduct}
          />
        </div>
      </>
    );
  }
}

export default ProductDetails;
