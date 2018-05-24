import React from 'react';
import { mount, render } from 'enzyme';
import ProductList from '../ProductList';

const catalog = [
    {
      id: 'A101',
      description: 'Screwdriver',
      category: '1',
      price: '9.75'
    },
    {
      id: 'A102',
      description: 'Electric screwdriver',
      category: '1',
      price: '49.50'
    }
  ],
  addCallback = jest.fn();

describe('ProductList presentation', function() {
  let productList;

  beforeEach(() => {
    productList = render(
      <ProductList products={catalog} addCallback={addCallback} />
    );
  });

  it('product description is shown', function() {
    catalog.map(product =>
      expect(productList.text()).toContain(product.description)
    );
  });

  it('product price is shown', function() {
    catalog.map(product => expect(productList.text()).toContain(product.price));
  });

  it('there is an add button per product', () => {
    catalog.map(product =>
      expect(productList.find('#button_add_' + product.id).length).toBe(1)
    );
  });
});

describe('ProductList callbacks', function() {
  let productList;

  beforeEach(() => {
    productList = mount(
      <ProductList products={catalog} addCallback={addCallback} />
    );
  });

  it('add calls the addCallback method with the given product', function() {
    productList
      .find('#button_add_' + catalog[0].id)
      .first()
      .simulate('click');
    expect(addCallback).toHaveBeenCalledWith(catalog[0]);
  });
});
