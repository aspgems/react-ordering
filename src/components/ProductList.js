import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
  render() {
    return (
      <div>
        Product List
        <ul>
          {this.props.products.map(p => {
            return (
              <ProductItem
                key={p.id}
                product={p}
                addCallback={this.props.addCallback}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductList;
