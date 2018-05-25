import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductItem from './ProductItem';
import 'bootstrap/dist/css/bootstrap.css';

const product = {
  id: 'ID',
  description: 'Product name',
  price: '35',
  category: 'Category'
};
storiesOf('ProductItem', module).add('standard', () => (
  <ProductItem product={product} />
));
