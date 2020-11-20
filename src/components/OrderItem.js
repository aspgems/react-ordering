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
      <Button
        onClick={props.decreaseItemHandler}
        color="secondary"
        size="sm"
        className="decrease-item-button"
      >
        -
      </Button>{' '}
      <Button
        onClick={props.increaseItemHandler}
        color="secondary"
        size="sm"
        className="increase-item-button"
      >
        +
      </Button>{' '}
      {props.item.quantity} x € {props.item.unitPrice}
    </ListGroupItemText>
    <ListGroupItemText>
      Subtotal Item: € {props.item.total}
      <br />
      <Button
        outline
        color="danger"
        size="sm"
        onClick={props.removeItemHandler}
        className="remove-item-button"
      >
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
