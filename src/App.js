import { Component } from "react";
import Layout from "./pages/Layout";
import ProductDetails from "./pages/ProductDetails";
import { Storage } from "./services/Storage";

// Service
import { getAllProducts } from "./services/FetchProducts";
class App extends Component {
  constructor() {
    super();
    this.state = {
      isCartOpen: false,
      cart: Storage.fetch(),
      products: [],
      selectedProduct: {},
      total: 0,
    };
  }
  componentDidMount() {
    getAllProducts().then((data) => {
      this.setState(
        {
          products: data, // set products
          selectedProduct: data[0], // selected first product
        },
        () => {
          this.getItemPrices();
        }
      );
    });
  }
  // change selected products
  changeSelectedProduct = (productId) => {
    let newSelectedProduct = this.state.products.filter(
      (product) => product.id === productId
    )[0];
    if (newSelectedProduct) {
      this.setState({
        selectedProduct: newSelectedProduct,
      });
    }
  };
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

    if (!inCart.length) {
      this.setState(
        {
          cart: [...this.state.cart, item],
        },
        () => {
          Storage.save(this.state.cart);
        }
      );
    } else {
      inCart[0].quantity += item.quantity;
      this.setState(
        {
          cart: this.state.cart,
        },
        () => {
          Storage.save(this.state.cart);
          this.getItemPrices();
        }
      );
    }
  };
  removeFromCart = (itemId) => {
    this.setState(
      {
        cart: this.state.cart.filter((item) => item.id !== itemId),
      },
      () => {
        Storage.save(this.state.cart);
        this.getItemPrices();
      }
    );
  };
  getItemPrices = () => {
    let totalPrice = 0;
    this.state.cart.forEach((item) => {
      for (let product of this.state.products) {
        if (product.id === item.productId)
          totalPrice += ((product.price * (100 - 30)) / 100) * item.quantity;
      }
    });
    this.setState({
      total: totalPrice,
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
        total={this.state.total}
      >
        <ProductDetails
          products={this.state.products}
          selectedProduct={this.state.selectedProduct}
          addToCart={this.addToCart}
          changeSelectedProduct={this.changeSelectedProduct}
        />
      </Layout>
    );
  }
}

export default App;
