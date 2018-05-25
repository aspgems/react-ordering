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
