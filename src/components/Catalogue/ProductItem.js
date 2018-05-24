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
            <CardText>{this.props.product.price}</CardText>
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

export default ProductItem;
