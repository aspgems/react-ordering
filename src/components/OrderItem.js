import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  // Order
  ListGroupItemHeading,
  ListGroupItem,
  ListGroupItemText,
  Button
} from 'reactstrap';

class OrderItem extends Component {
  increaseItemHandler(productId) {
    this.setState(this.props.state.increaseItem(productId));
  }

  decreaseItemHandler(productId) {
    this.setState(this.props.state.decreaseItem(productId));
  }

  removeItemHandler(productId) {
    this.setState(this.props.state.removeItem(productId));
  }
  render() {
    return (
      <ListGroupItem>
        <ListGroupItemHeading>
          {this.props.item.productId} <br />
        </ListGroupItemHeading>
        <ListGroupItemText>
          <Button
            onClick={() =>
              this.props.decreaseItemHandler(this.props.item.productId)
            }
            color="secondary"
          >
            -
          </Button>{' '}
          <Button
            onClick={() => {
              this.props.increaseItemHandler(this.props.item.productId);
            }}
            color="secondary"
          >
            +
          </Button>{' '}
          {this.props.item.quantity} x € {this.props.item.unitPrice}
        </ListGroupItemText>
        <ListGroupItemText>
          Subtotal Item: € {this.props.item.total}
          <br />
          <Button
            outline
            color="danger"
            onClick={() => this.removeItemHandler(this.props.item.productId)}
          >
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
  increaseCallback: PropTypes.func.isRequired,
  decreaseCallback: PropTypes.func.isRequired,
  removeCallback: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default OrderItem;
