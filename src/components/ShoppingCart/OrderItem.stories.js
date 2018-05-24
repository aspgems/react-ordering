import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderItem from './OrderItem';
import 'bootstrap/dist/css/bootstrap.css';
storiesOf('OrderItem', module).add('standard', () => (
  <OrderItem
    product={{
      id: 'B103',
      description: 'Switch with motion detector',
      category: '2',
      price: '12.95'
    }}
  />
));
