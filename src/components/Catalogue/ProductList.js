import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { API_HOST, DEFAULT_QUERY, NAMESPACE } from './config';

class ProductList extends Component {
  render() {
    return (
      <div>
        <h1>Product List</h1>
        <div className="row">
          {this.props.products.map(p => {
            return (
              <ProductItem
                key={p.id}
                product={p}
                addCallback={this.props.addCallback}
              />
            );
          })}
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch(API_HOST + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ [NAMESPACE]: data }));
  }
}

export default ProductList;
