import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import './ProductItem.css';

const ProductItem = props => (
  <div className="col-sm-12 col-md-6">
    <Card>
      <CardBody>
        <CardTitle>{props.product.description}</CardTitle>
        <CardSubtitle>{props.product.category}</CardSubtitle>
        <CardText>€ {props.product.price}</CardText>
        <Button
          onClick={props.addToCartHandler}
          color="primary"
          id={'button_add_' + props.product.id}
        >
          Add to cart
        </Button>
      </CardBody>
    </Card>
  </div>
);

ProductItem.propTypes = {
  addToCartHandler: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    category: PropTypes.string
  }).isRequired
};

export default ProductItem;
