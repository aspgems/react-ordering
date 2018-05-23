import React, { Component } from 'react';
import Product from './Product';

class OrderItem extends Component {
  increase() {
    this.props.increaseCallback(this.props.index);
  }

  decrease() {
    this.props.decreaseCallback(this.props.index);
  }

  remove() {
    this.props.removeCallback(this.props.index);
  }

  render() {
    return (
      <div>
        <Product product={this.props.order.product} />
        {this.props.order.quantity}
        <div>
          {this.props.order.quantity *
            parseFloat(this.props.order.product.price)}
        </div>
        <button onClick={this.remove.bind(this)}>Remove</button>
        <button onClick={this.increase.bind(this)}>+</button>
        <button onClick={this.decrease.bind(this)}>-</button>
      </div>
    );
  }
}

export default OrderItem;
