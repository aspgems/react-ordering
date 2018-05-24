import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

class ProductList extends Component {
  render() {
    return (
      <div>
        <h2>Product List</h2>
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

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  addCallback: PropTypes.func.isRequired
};

export default ProductList;
