import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Summary from './Summary';
import OrderItemList from './OrderItemList';

class Order extends Component {
  render() {
    if (Object.keys(this.props.order).length > 0) {
      return (
        <div>
          <OrderItemList items={this.props.order.items} />
          <Summary items={this.props.order.items} />
        </div>
      );
    } else {
      return <div>Empty</div>;
    }
  }
}

Order.propTypes = {
  order: PropTypes.object.isRequired
};

export default Order;
