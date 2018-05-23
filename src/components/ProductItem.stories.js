import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductItem from './ProductItem';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('ProductItem', module).add('standard', () => (
  <ProductItem
    product={{
      id: 'B103',
      description: 'Switch with motion detector',
      category: '2',
      price: '12.95'
    }}
  />
));
