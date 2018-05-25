import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

class Summary extends Component {
  render() {
    return (
      <Alert color="dark">
        Total: € {Number(this.props.order.total).toFixed(2)}
      </Alert>
    );
  }
}

Summary.propTypes = {
  order: PropTypes.object.isRequired
};

export default Summary;
