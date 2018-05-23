import React, { Component } from 'react';
import Product from './Product';

class ProductItem extends Component {
  add() {
    alert('here we go');
  }
  render() {
    return (
      <div>
        <Product product={this.props.product} />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default ProductItem;
