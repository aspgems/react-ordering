import React, { Component } from 'react';
import { Alert, ListGroup } from 'reactstrap';
import OrderItem from './OrderItem';
import config from './config';

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
                <OrderItem
                  key={index}
                  productId={item.productId}
                  quantity={item.quantity}
                  unitPrice={item.unitPrice}
                  total={item.total}
                  // increaseQuantityHandler={this.props.increaseItemCountHandler}
                />
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
    fetch(config.API_HOST + config.orderPath(1))
      .then(response => response.json())
      .then(data => this.setState(this._parseOrderJSON(data)))
      .catch(e => console.log(e));
  }
  _parseOrderJSON(data) {
    console.log(data);
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
