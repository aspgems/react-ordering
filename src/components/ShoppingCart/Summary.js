import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

class Summary extends Component {
  render() {
    let total = 0;

    this.props.items.map(item => {
      total += (
        Number(item.quantity) * Number(parseFloat(item.unitPrice))
      ).toFixed(2);
      return total;
    });

    return <Alert color="dark">Total: € {Number(total).toFixed(2)}</Alert>;
  }
}

Summary.propTypes = {
  items: PropTypes.array.isRequired
};

export default Summary;
