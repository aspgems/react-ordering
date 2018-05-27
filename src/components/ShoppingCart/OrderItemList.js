import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import OrderItem from './OrderItem';

class OrderItemList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.items.map((item, index) => {
          return (
            <OrderItem
              key={index}
              productId={item.productId}
              quantity={item.quantity}
              unitPrice={item.unitPrice}
              total={item.total}
              increaseQuantityHandler={this.props.increaseItemCountHandler}
            />
          );
        })}
      </ListGroup>
    );
  }
}

OrderItemList.propTypes = {
  items: PropTypes.array.isRequired,
  increaseItemCountHandler: PropTypes.func.isRequired
  // removeCallback: PropTypes.func.isRequired,
  // increaseCallback: PropTypes.func.isRequired,
  // decreaseCallback: PropTypes.func.isRequired
};

export default OrderItemList;
