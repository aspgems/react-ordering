import React from 'react';
import ProductItem from './ProductItem';
import renderer from 'react-test-renderer';

test('it shows correctly', () => {
  const product = {
    id: 'A134',
    description: 'Description',
    category: 'Category',
    price: 10.5
  };
  const doNothing = () => {};
  const component = renderer.create(
    <ProductItem product={product} addToCartHandler={doNothing} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
