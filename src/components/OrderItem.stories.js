import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs/react';
import OrderItem from './OrderItem';
import 'bootstrap/dist/css/bootstrap.css';

const stories = storiesOf('OrderItem', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
  const item = {
    productId: text('productId', 'PRODUCT001'),
    quantity: number('quantity', 10),
    unitPrice: number('unitPrice', 4.5),
    total: number('total', 45)
  };

  return (
    <OrderItem
      item={item}
      increaseItemHandler={action('increase item')}
      decreaseItemHandler={action('decrease item')}
      removeItemHandler={action('remove item')}
    />
  );
});
