import React, { Component } from "react";

// Service
import { getCategories } from "../services/FetchCategories";

export class CategoriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }
  componentDidMount() {
    getCategories().then((data) => {
      this.setState({
        categories: data,
      });
    });
  }
  render() {
    return (
      <div className="categories">
        <div className="container">
          <div className="categories-list">
            {this.state.categories.map((category) => (
              <button className="categories-list-item" key={category.id}>
                {category.name}
              </button>
            ))}
            <button className="categories-list-item btn-offer">Offer</button>
          </div>
        </div>
      </div>
    );
  }
}
