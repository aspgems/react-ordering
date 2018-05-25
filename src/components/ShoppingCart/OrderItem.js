import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OrderPropType } from './PropTypes';
import { ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { ListGroupItem } from 'reactstrap';
import './OrderItem.css';

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
      <ListGroupItem>
        <ListGroupItemHeading>
          {this.props.order.product.description}
          <br />
        </ListGroupItemHeading>
        <ListGroupItemText>
          <Button onClick={this.decrease.bind(this)} color="secondary">
            -
          </Button>{' '}
          <Button onClick={this.increase.bind(this)} color="secondary">
            +
          </Button>{' '}
          {this.props.order.quantity} x € {this.props.order.product.price}
        </ListGroupItemText>
        <ListGroupItemText>
          Subtotal Item: €{' '}
          {this.props.order.quantity *
            parseFloat(this.props.order.product.price)}{' '}
          <Button outline color="danger" onClick={this.remove.bind(this)}>
            Remove
          </Button>
        </ListGroupItemText>
      </ListGroupItem>
    );
  }
}

OrderItem.propTypes = {
  order: OrderPropType,
  increaseCallback: PropTypes.func.isRequired,
  decreaseCallback: PropTypes.func.isRequired,
  removeCallback: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default OrderItem;
