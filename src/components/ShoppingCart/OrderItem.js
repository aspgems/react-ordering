import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { ListGroupItem } from 'reactstrap';
import './OrderItem.css';
import increaseItemCount from './actions';

class OrderItem extends Component {
  increase() {
    this.setState(increaseItemCount);
    // this.props.increaseCallback(this.props.index);
  }

  decrease() {
    this.props.decreaseCallback(this.props.index);
  }

  remove() {
    this.props.removeCallback(this.props.index);
  }

  total() {
    (this.props.item.quantity * this.props.item.unitPrice).toFixed(2);
  }

  render() {
    return (
      <ListGroupItem>
        <ListGroupItemHeading>
          {this.props.item.productId}{' '}
          {/* here comes the name or the description of the product */}
          <br />
        </ListGroupItemHeading>
        <ListGroupItemText>
          <Button onClick={this.decrease.bind(this)} color="secondary">
            -
          </Button>{' '}
          <Button onClick={this.increase()} color="secondary">
            +
          </Button>{' '}
          {this.props.item.quantity} x € {this.props.item.unitPrice}
        </ListGroupItemText>
        <ListGroupItemText>
          Subtotal Item: €{' '}
          {(this.props.item.quantity * this.props.item.unitPrice).toFixed(2)}
          <Button outline color="danger" onClick={this.remove.bind(this)}>
            Remove
          </Button>
        </ListGroupItemText>
      </ListGroupItem>
    );
  }
}

OrderItem.propTypes = {
  item: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }),
  increaseHandle: PropTypes.func.isRequired,
  decreaseCallback: PropTypes.func.isRequired,
  removeCallback: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default OrderItem;
