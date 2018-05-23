import React, { Component } from 'react';
import ProductItem from './ProductItem';

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
}

export default ProductList;
