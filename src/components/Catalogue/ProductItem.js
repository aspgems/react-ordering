import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProductPropType } from './PropTypes';

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import './ProductItem.css';

class ProductItem extends Component {
  add() {
    this.props.addCallback(this.props.product);
  }

  render() {
    return (
      <div className="col-sm-12 col-md-6">
        <Card>
          <CardBody>
            <CardTitle>{this.props.product.description}</CardTitle>
            <CardSubtitle>{this.props.product.category}</CardSubtitle>
            <CardText>€ {this.props.product.price}</CardText>
            <Button
              onClick={this.add.bind(this)}
              color="primary"
              id={'button_add_' + this.props.product.id}
            >
              Add to cart
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

ProductItem.propTypes = {
  addCallback: PropTypes.func.isRequired,
  product: ProductPropType
};

export default ProductItem;
