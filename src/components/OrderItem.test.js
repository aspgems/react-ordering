import React from 'react';
import OrderItem from './OrderItem';
import renderer from 'react-test-renderer';

test('it shows correctly', () => {
  const item = {
    productId: 'A134',
    quantity: 10,
    unitPrice: 10.5,
    total: 105
  };
  const doNothing = () => {};
  const component = renderer.create(
    <OrderItem
      item={item}
      increaseItemHandler={doNothing}
      decreaseItemHandler={doNothing}
      removeItemHandler={doNothing}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
