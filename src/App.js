import { Component } from "react";
import Layout from "./pages/Layout";
import ProductDetails from "./pages/ProductDetails";
import { Storage } from "./services/Storage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isCartOpen: false,
      cart: Storage.fetch(),
    };
  }
  // Open Cart
  openCart = () => {
    this.setState({
      isCartOpen: true,
    });
    document.body.style.overflow = "hidden";
  };
  // Close Cart
  closeCart = () => {
    this.setState({
      isCartOpen: false,
    });
    document.body.style.overflow = "unset";
  };

  // Add to cart
  addToCart = (item) => {
    let inCart = this.state.cart.filter(
      (product) => product.productId === item.productId
    );
    this.setState(
      {
        cart: [...this.state.cart, item],
      },
      () => {
        Storage.save(this.state.cart);
      }
    );
  };
  removeFromCart = (itemId) => {
    this.setState({
      cart: this.state.cart.filter((item) => item.id !== itemId),
    },
    () => {
      Storage.save(this.state.cart);
    });
  };

    // Gallery list change active img
    changeImageInGallery = (index) => {
      this.setState({
        activeImage: this.state.selectedProduct?.images?.at(index),
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
  
  render() {
    return (
      <Layout
        cart={this.state.cart}
        isCartOpen={this.state.isCartOpen}
        openCart={this.openCart}
        closeCart={this.closeCart}
        removeFromCart={this.removeFromCart}
      >
        <ProductDetails addToCart={this.addToCart} />
      </Layout>
    );
  }
}

export default App;
