import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import { ProductsListContainer } from './components/Catalogue';
import { OrderContainer } from './components/ShoppingCart/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ASPgems &amp; React</h1>
        </header>
        <Container>
          <Row>
            <Col sm="12" md="8">
              <ProductsListContainer
                addToCartHandler={() => {
                  console.log('added to cart');
                }}
              />
            </Col>
            <Col sm="12" md="4">
              <h2>Shopping Cart</h2>
              <OrderContainer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
