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
          <Button
            onClick={this.decrease.bind(this)}
            color="secondary"
            size="sm"
          >
            -
          </Button>{' '}
          <Button
            onClick={this.increase.bind(this)}
            color="secondary"
            size="sm"
          >
            +
          </Button>{' '}
          {this.props.order.quantity} x{' '}
          <strong>€ {this.props.order.product.price}</strong>
        </ListGroupItemText>
        <div>
          Subtotal Item:{' '}
          <strong>
            €{' '}
            {this.props.order.quantity *
              parseFloat(this.props.order.product.price)}{' '}
          </strong>
          <Button
            onClick={this.remove.bind(this)}
            outline
            color="danger"
            size="sm"
          >
            Remove
          </Button>
        </div>
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
