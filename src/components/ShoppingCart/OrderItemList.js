import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import OrderItem from './OrderItem';

class OrderItemList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.orders.map((order, index) => {
          return (
            <OrderItem
              key={index}
              order={order}
              index={index}
              removeCallback={this.props.removeCallback}
              increaseCallback={this.props.increaseCallback}
              decreaseCallback={this.props.decreaseCallback}
            />
          );
        })}
      </ListGroup>
    );
  }
}

export default OrderItemList;
