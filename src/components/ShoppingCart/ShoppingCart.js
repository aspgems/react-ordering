import React, { Component } from 'react';
import Summary from './Summary';
import OrderItemList from './OrderItemList';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <OrderItemList
          orders={this.props.shoppingCart}
          removeCallback={this.props.removeCallback}
          increaseCallback={this.props.increaseCallback}
          decreaseCallback={this.props.decreaseCallback}
        />
        <Summary orders={this.props.shoppingCart} />
      </div>
    );
  }
}

export default ShoppingCart;
