import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

class Summary extends Component {
  render() {
    let total = 0;

    this.props.orders.map(o => {
      total += o.quantity * parseFloat(o.product.price);
      return total;
    });

    return (
      <Alert color="dark">
        Total: <strong>€ {total}</strong>
      </Alert>
    );
  }
}

Summary.propTypes = {
  orders: PropTypes.array.isRequired
};

export default Summary;
