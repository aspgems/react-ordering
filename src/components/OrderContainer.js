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
                      onClick={() => console.log('decrease')}
                      color="secondary"
                    >
                      -
                    </Button>{' '}
                    <Button
                      onClick={() => console.log('increase')}
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
                      onClick={() => console.log('remove')}
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
