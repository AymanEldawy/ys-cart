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
