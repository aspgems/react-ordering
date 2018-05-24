import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

OrderItemList.propTypes = {
  orders: PropTypes.array.isRequired,
  removeCallback: PropTypes.func.isRequired,
  increaseCallback: PropTypes.func.isRequired,
  decreaseCallback: PropTypes.func.isRequired
};

export default OrderItemList;
