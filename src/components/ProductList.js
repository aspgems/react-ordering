import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 'A101',
          description: 'Screwdriver',
          category: '1',
          price: '9.75'
        },
        {
          id: 'A102',
          description: 'Electric screwdriver',
          category: '1',
          price: '49.50'
        },
        {
          id: 'B101',
          description: 'Basic on-off switch',
          category: '2',
          price: '4.99'
        },
        {
          id: 'B102',
          description: 'Press button',
          category: '2',
          price: '4.99'
        },
        {
          id: 'B103',
          description: 'Switch with motion detector',
          category: '2',
          price: '12.95'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        Product List
        <ul>
          {this.state.products.map(p => {
            return <ProductItem key={p.id} product={p} />;
          })}
        </ul>
      </div>
    );
  }
}

export default ProductList;
