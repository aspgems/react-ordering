import React from 'react';
import { shallow } from 'enzyme';
import OrderItem from './OrderItem';
import sinon from 'sinon';

const item = {
  productId: 'A134',
  quantity: 10,
  unitPrice: 10.5,
  total: 105
};

const increaseItemMockHandler = sinon.spy();
const decreaseItemMockHandler = sinon.spy();
const removeItemMockHandler = sinon.spy();

const wrapper = shallow(
  <OrderItem
    item={item}
    increaseItemHandler={increaseItemMockHandler}
    decreaseItemHandler={decreaseItemMockHandler}
    removeItemHandler={removeItemMockHandler}
  />
);

test('removeItemHandler', () => {
  wrapper.find('.remove-item-button').simulate('click');
  expect(removeItemMockHandler).toHaveProperty('callCount', 1);
});

test('increaseItemHandler', () => {
  wrapper.find('.increase-item-button').simulate('click');
  expect(increaseItemMockHandler).toHaveProperty('callCount', 1);
});

test('decreaseItemHandler', () => {
  wrapper.find('.decrease-item-button').simulate('click');
  expect(decreaseItemMockHandler).toHaveProperty('callCount', 1);
});
