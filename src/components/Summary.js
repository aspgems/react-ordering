import React, { Component } from 'react';

class Summary extends Component {
  render() {
    let total = 0;

    this.props.orders.map(o => {
      total += o.quantity * parseFloat(o.product.price);
    });

    return <div>{total} €</div>;
  }
}

export default Summary;
