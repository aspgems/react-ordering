import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class Summary extends Component {
  render() {
    let total = 0;

    this.props.orders.map(o => {
      total += o.quantity * parseFloat(o.product.price);
      return total;
    });

    return <Alert color="dark">Total: {total} €</Alert>;
  }
}

export default Summary;
