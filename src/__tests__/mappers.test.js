import * as mappers from '../mappers';

describe('product2orderItem', () => {
  const product = {
    id: 'id',
    description: 'description',
    category: 'category',
    price: 10
  };

  test('returns an orderItem', () => {
    const expected = {
      productId: 'id',
      quantity: 1,
      unitPrice: 10
    };
    expect(mappers.product2orderItem(product)).toEqual(expected);
  });
});

describe('parseOrderJSON', () => {
  const JSON = {
    id: '1',
    customerId: '1',
    items: [
      {
        productId: 'B102',
        quantity: '10',
        unitPrice: '4.99',
        total: '49.90'
      }
    ],
    total: '49.90'
  };

  test('returns parsed Order', () => {
    expect(mappers.parseOrderJSON(JSON)).toEqual({
      id: 1,
      customerId: 1,
      items: [
        {
          productId: 'B102',
          quantity: 10,
          unitPrice: 4.99
        }
      ]
    });
  });
});
