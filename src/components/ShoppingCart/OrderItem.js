import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { ListGroupItem } from 'reactstrap';
import './OrderItem.css';
// import { increaseItemCount } from './actions';

class OrderItem extends Component {
  // constructor(props) {
  // super(props);
  // this.setState = {
  // productId: props.item.productId,
  // unitPrice: props.item.unitPrice,
  // quantity: props.item.quantity,
  // total: props.item.unitPrice * props.item.quantity
  // }
  // }

  render() {
    return (
      <ListGroupItem>
        <ListGroupItemHeading>
          {this.props.productId} <br />
        </ListGroupItemHeading>
        <ListGroupItemText>
          <Button onClick={this.decreaseQuantity} color="secondary">
            -
          </Button>{' '}
          <Button
            onClick={this.props.increaseQuantityHandler}
            color="secondary"
          >
            +
          </Button>{' '}
          {this.props.quantity} x € {this.props.unitPrice}
        </ListGroupItemText>
        <ListGroupItemText>
          Subtotal Item: € {this.props.total}
          <br />
          <Button outline color="danger" onClick={() => console.log('remove')}>
            Remove
          </Button>
        </ListGroupItemText>
      </ListGroupItem>
    );
  }

  // increaseQuantity() {
  // this.setState(increaseItemCount);
  // }

  decreaseQuantity() {
    console.log('decrease');
  }
}

OrderItem.propTypes = {
  productId: PropTypes.string.isRequired,
  unitPrice: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  increaseQuantityHandler: PropTypes.func.isRequired
};

export default OrderItem;
