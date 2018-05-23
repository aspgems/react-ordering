import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ASPgems &amp; React</h1>
        </header>
        <p className="App-intro">Coming soon...</p>
        <Container>
          <Row>
            <Col sm="12" md="8">
              <ProductList />
            </Col>
            <Col sm="12" md="4">
              Order List
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
