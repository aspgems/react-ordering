import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Summary from './Summary';
import OrderItemList from './OrderItemList';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <OrderItemList
          items={this.props.order.items}
          removeCallback={this.props.removeCallback}
          increaseCallback={this.props.increaseCallback}
          decreaseCallback={this.props.decreaseCallback}
        />
        <Summary items={this.props.order.items} />
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    customerId: PropTypes.string,
    items: PropTypes.array.isRequired
  }).isRequired,
  removeCallback: PropTypes.func.isRequired,
  increaseCallback: PropTypes.func.isRequired,
  decreaseCallback: PropTypes.func.isRequired
};

export default ShoppingCart;
