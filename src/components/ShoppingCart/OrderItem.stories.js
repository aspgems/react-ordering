import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderItem from './OrderItem';
import 'bootstrap/dist/css/bootstrap.css';

const order = {
  product: {
    id: 'ID',
    description: 'Product description',
    price: '35',
    category: 'Category'
  },
  quantity: 3
};
storiesOf('OrderItem', module).add('standard', () => (
  <OrderItem order={order} />
));
