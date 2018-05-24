import React, { Component } from 'react';
import {
  ListGroupItemHeading,
  ListGroupItemText,
  Badge,
  Button
} from 'reactstrap';
import { ListGroupItem } from 'reactstrap';

const badgeButton = {
  cursor: 'pointer',
  margin: '0 0 0 5px',
  width: '22px'
};

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
        <div>Product Item {this.props.order.product.id}</div>
        <ListGroupItemHeading>
          {this.props.order.product.description}
        </ListGroupItemHeading>
        <ListGroupItemText>
          <div>{this.props.order.product.price}</div>
          <div>{this.props.order.product.category}</div>
          <div>
            Quantity: {this.props.order.quantity}
            <Badge
              onClick={this.decrease.bind(this)}
              color="secondary"
              style={badgeButton}
            >
              -
            </Badge>
            <Badge
              onClick={this.increase.bind(this)}
              color="secondary"
              style={badgeButton}
            >
              +
            </Badge>
          </div>
          <div>
            Subtotal Item:{' '}
            {this.props.order.quantity *
              parseFloat(this.props.order.product.price)}
          </div>
        </ListGroupItemText>
        <Button outline color="danger" onClick={this.remove.bind(this)}>
          Remove
        </Button>
      </ListGroupItem>
    );
  }
}

export default OrderItem;
