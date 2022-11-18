import React, { Component } from "react";

// Styles
import "../styles/cart.scss";
// Images
import imgClose from "../images/cart/close.svg";
import { CartTotal } from "../components/CartTotal";
import { CartItem } from "../components/CartItem";
import { getSingleProduct } from "../services/FetchSingleProduct";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      listOfPrices: {},
    };
  }
  calculateTotal(productId, price, quantity) {
    let listOfPricesObj = this.state.listOfPrices;
    listOfPricesObj[productId] = ((price * (100 - 30)) / 100) * quantity;
    this.setState((prevState) => ({
      listOfPrices: listOfPricesObj,
      total: prevState.total + listOfPricesObj[productId],
    }));
  }

  setTotal = () => {
    this.setState({
      total:
        +this.state.total +
        Object.values(this.listOfPrices).reduce((acc, curr) => acc + curr),
    });
  };
  componentDidMount() {
    this.props.cart.forEach((item) => {
      getSingleProduct(item.productId).then((product) => {
        this.calculateTotal(item.productId, product.price, item.quantity);
      });
    });
    // this.setTotal();
  }

  render() {
    return (
      <div className={`cart ${this.props.isCartOpen ? "show-cart" : ""}`}>
        <button className="cart-close" onClick={this.props.closeCart}>
          <img src={imgClose} alt="hide cart" />
        </button>
        <h2>My Cart</h2>
        <div className="cart-content">
          <h3>Cart Summary</h3>
          <div className="cart-products">
            {this.props.cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={this.props.removeFromCart}
              />
            ))}
          </div>
          <CartTotal total={this.state.total} />
          <div className="cart-actions">
            <button>Review Cart</button>
            <button>Complete Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}
