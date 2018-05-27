import React, { Component } from 'react';
import config from './productsConfig';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

class ProductsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  render() {
    return (
      <div>
        <h2>Product List</h2>
        <div className="row">
          {this.state.products.map(p => {
            return (
              <ProductItem
                key={p.id}
                product={p}
                addToCartHandler={this.props.addToCartHandler}
              />
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch(config.api.host + config.api.productsPath)
      .then(response => response.json())
      .then(data =>
        this.setState({
          products: data.map(product => this._parseProductJSON(product))
        })
      )
      .catch(e => console.log(e));
  }

  _parseProductJSON(data) {
    return {
      id: data.id,
      description: data.description,
      category: data.category,
      price: Number(parseFloat(data.price).toFixed(2))
    };
  }

  _handleByProduct;
}

ProductsListContainer.propTypes = {
  addToCartHandler: PropTypes.func.isRequired
};
export default ProductsListContainer;
