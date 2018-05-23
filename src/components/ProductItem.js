import React, { Component } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

class ProductItem extends Component {
  render() {
    return (
      <div className="col-sm-12 col-md-6">
        <Card>
          <CardBody>
            <CardTitle>{this.props.product.description}</CardTitle>
            <CardSubtitle>{this.props.product.category}</CardSubtitle>
            <CardText>{this.props.product.price}</CardText>
            <Button color="primary">Add to cart</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ProductItem;
