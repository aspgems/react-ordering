import React, { Component } from 'react';
import Order from './Order';
import config from './config';
import { increaseItemCount } from './actions';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {}
    };
  }

  render() {
    return (
      <Order
        order={this.state.order}
        increaseItemCountHandler={this._increaseItemCountHandler.bind(this)}
      />
    );
  }

  componentDidMount() {
    fetch(config.API_HOST + config.orderPath(1))
      .then(response => response.json())
      .then(data => this.setState({ order: this._parseOrderJSON(data) }))
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
          total: Number((item.quantity * item.unitPrice).toFixed(2))
        };
      })
    };
  }

  _increaseItemCountHandler() {
    this.setState(increaseItemCount);
  }
}

export default Container;
