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
              item={item}
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
  items: PropTypes.array.isRequired,
  removeCallback: PropTypes.func.isRequired,
  increaseCallback: PropTypes.func.isRequired,
  decreaseCallback: PropTypes.func.isRequired
};

export default OrderItemList;
