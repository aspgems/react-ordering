import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

class Summary extends Component {
  render() {
    let total = 0;

    this.props.items.map(item => {
      total += item.quantity * item.unitPrice;

      return total;
    });

    return <Alert color="dark">Total: € {total.toFixed(2)}</Alert>;
  }
}

Summary.propTypes = {
  items: PropTypes.array.isRequired
};

export default Summary;
