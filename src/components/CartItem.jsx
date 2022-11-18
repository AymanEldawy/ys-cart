import React, { Component } from "react";

// Service
import { getSingleProduct } from "../services/FetchSingleProduct";

export class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    getSingleProduct(this.props.item.productId).then((data) => {
      this.setState({
        product: data,
      });
    });
  }

  priceDiscount = (price) => {
    return (price * (100 - 30)) / 100;
  };

  render() {
    return (
      <div className="cart-item">
        <figure className="cart-item-img">
          <img
            src={this.state.product?.images?.at(0)}
            alt={this.state.product.title}
          />
        </figure>
        <div className="cart-item-body">
          <h3>{this.state.product.title}</h3>
          <span>Quantity: {this.props.item?.quantity}</span>
          <div class="cart-item-info">
            <h4>
              {this.priceDiscount(
                +this.state.product?.price * this.props.item?.quantity
              )}{" "}
              LE
            </h4>
            <button
              className="remove-item"
              onClick={() => this.props.removeFromCart(this.props.item?.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}
