import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroupItemHeading,
  ListGroupItem,
  ListGroupItemText,
  Button
} from 'reactstrap';

const OrderItem = props => (
  <ListGroupItem>
    <ListGroupItemHeading>
      {props.item.productId} <br />
    </ListGroupItemHeading>
    <ListGroupItemText>
      <Button onClick={props.decreaseItemHandler} color="secondary">
        -
      </Button>{' '}
      <Button onClick={props.increaseItemHandler} color="secondary">
        +
      </Button>{' '}
      {props.item.quantity} x € {props.item.unitPrice}
    </ListGroupItemText>
    <ListGroupItemText>
      Subtotal Item: € {props.item.total}
      <br />
      <Button outline color="danger" onClick={props.removeItemHandler}>
        Remove
      </Button>
    </ListGroupItemText>
  </ListGroupItem>
);

OrderItem.propTypes = {
  item: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    unitPrice: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired,
  increaseItemHandler: PropTypes.func.isRequired,
  decreaseItemHandler: PropTypes.func.isRequired,
  removeItemHandler: PropTypes.func.isRequired
};

export default OrderItem;
