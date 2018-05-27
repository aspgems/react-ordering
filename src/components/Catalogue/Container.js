import React, { Component } from 'react';
import ProductList from './ProductList';
import config from './config';
import PropTypes from 'prop-types';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  render() {
    return (
      <ProductList
        products={this.state.products}
        addToCartHandler={this.props.addToCartHandler}
      />
    );
  }

  componentDidMount() {
    fetch(config.API_HOST + config.PRODUCTS_PATH)
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

Container.propTypes = {
  addToCartHandler: PropTypes.func.isRequired
};
export default Container;
