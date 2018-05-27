import React, { Component } from 'react';
import {
  Alert,
  ListGroup,
  ListGroupItemHeading,
  ListGroupItem,
  ListGroupItemText,
  Button
} from 'reactstrap';
import config from './orderConfig';

const calculateOrderTotal = items => {
  return items.reduce((acc, item) => {
    return acc + item.total;
  }, 0);
};
const calulateItemTotal = item => {
  return Number(parseFloat(item.quantity * item.unitPrice).toFixed(2));
};
const buildItem = item => {
  return {
    productId: item.productId,
    quantity: item.quantity,
    unitPrice: item.unitPrice,
    total: calulateItemTotal(item)
  };
};
const itemsIncrease = (items, productId) => {
  return items.map(item => {
    if (item.productId === productId) {
      return buildItem({ ...item, quantity: item.quantity + 1 });
    }

    return buildItem({ ...item });
  });
};
const itemsDecrease = (items, productId) => {
  return items.map(item => {
    if (item.productId === productId && item.quantity > 0) {
      return buildItem({ ...item, quantity: item.quantity - 1 });
    }

    return buildItem({ ...item });
  });
};

const itemsRemove = (items, productId) => {
  return items.filter(item => item.productId !== productId);
};

const increaseItem = productId => {
  return prevState => {
    const items = itemsIncrease(prevState.items, productId);
    return {
      id: prevState.id,
      customerId: prevState.customerId,
      items: items,
      total: calculateOrderTotal(items)
    };
  };
};

const decreaseItem = productId => {
  return prevState => {
    const items = itemsDecrease(prevState.items, productId);
    return {
      id: prevState.id,
      customerId: prevState.customerId,
      items: items,
      total: calculateOrderTotal(items)
    };
  };
};

const removeItem = productId => {
  return prevState => {
    const items = itemsRemove(prevState.items, productId);
    return {
      id: prevState.id,
      customerId: prevState.customerId,
      items: items,
      total: calculateOrderTotal(items)
    };
  };
};

class OrderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      customerId: null,
      items: [],
      total: 0
    };
  }

  increaseItemHandler(productId) {
    this.setState(increaseItem(productId));
  }

  decreaseItemHandler(productId) {
    this.setState(decreaseItem(productId));
  }

  removeItemHandler(productId) {
    this.setState(removeItem(productId));
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <div>
          <ListGroup>
            {this.state.items.map((item, index) => {
              return (
                <ListGroupItem key={index}>
                  <ListGroupItemHeading>
                    {item.productId} <br />
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    <Button
                      onClick={() => this.decreaseItemHandler(item.productId)}
                      color="secondary"
                    >
                      -
                    </Button>{' '}
                    <Button
                      onClick={() => {
                        this.increaseItemHandler(item.productId);
                      }}
                      color="secondary"
                    >
                      +
                    </Button>{' '}
                    {item.quantity} x € {item.unitPrice}
                  </ListGroupItemText>
                  <ListGroupItemText>
                    Subtotal Item: € {item.total}
                    <br />
                    <Button
                      outline
                      color="danger"
                      onClick={() => this.removeItemHandler(item.productId)}
                    >
                      Remove
                    </Button>
                  </ListGroupItemText>
                </ListGroupItem>
              );
            })}
          </ListGroup>
          <Alert color="dark">Total: € {this.state.total}</Alert>
        </div>
      );
    } else {
      return <div>Empty</div>;
    }
  }
  componentDidMount() {
    fetch(config.api.host + config.api.orderPath(1))
      .then(response => response.json())
      .then(data => this.setState(this._parseOrderJSON(data)))
      .catch(e => console.log(e));
  }
  _parseOrderJSON(data) {
    return {
      id: Number(data.id),
      customerId: Number(data.id),
      items: data.items.map(function(item) {
        return {
          productId: item.productId,
          quantity: Number(item.quantity),
          unitPrice: Number(parseFloat(item.unitPrice).toFixed(2)),
          total: Number(parseFloat(item.total).toFixed(2))
        };
      }),
      total: data.total
    };
  }
}

export default OrderContainer;
