import React, { Component } from 'react';
import Summary from './Summary';
import OrderItemList from './OrderItemList';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoping_cart: [
        {
          product: {
            id: 'A101',
            description: 'Screwdriver',
            category: '1',
            price: '9.75'
          },
          quantity: 2
        },
        {
          product: {
            id: 'A102',
            description: 'Electric screwdriver',
            category: '1',
            price: '49.50'
          },
          quantity: 1
        }
      ]
    };
  }

  increase(index) {
    let shoppingCart = this.state.shoping_cart.slice();

    shoppingCart[index].quantity += 1;

    this.setState({ shopping_cart: shoppingCart });
  }

  decrease(index) {
    let shoppingCart = this.state.shoping_cart.slice();

    shoppingCart[index].quantity -= 1;

    this.setState({ shopping_cart: shoppingCart });
  }

  remove(index) {
    let shoppingCart = this.state.shoping_cart.splice(index, 1);
    this.setState({ shopping_cart: shoppingCart });
  }

  render() {
    return (
      <div>
        <OrderItemList
          orders={this.state.shoping_cart}
          removeCallback={this.remove.bind(this)}
          decreaseCallback={this.decrease.bind(this)}
          increaseCallback={this.increase.bind(this)}
        />
        <Summary orders={this.state.shoping_cart} />
      </div>
    );
  }
}

export default ShoppingCart;
