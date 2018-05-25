import * as actions from '../actions';

describe('initState', () => {
  test('returns an empty object', () => {
    expect(actions.initState()).toEqual({});
  });
});

describe('increaseItemCount(index, order)', () => {
  const order = {
    id: 1,
    customerId: 1,
    items: [
      { quantity: 1, unitPrice: '0', total: 0 },
      { quantity: 2, unitPrice: '0', total: 0 }
    ],
    total: 0
  };

  test('increases by 1 the quantity property of the object in index', () => {
    expect(actions.increaseItemCount(0, order)).toEqual({
      id: 1,
      customerId: 1,
      items: [
        { quantity: 2, unitPrice: '0', total: 0 },
        { quantity: 2, unitPrice: '0', total: 0 }
      ],
      total: 0
    });
  });
});

describe('decreaseItemCount(index, order)', () => {
  const order = {
    id: 1,
    customerId: 1,
    items: [
      { quantity: 1, unitPrice: '0', total: 0 },
      { quantity: 2, unitPrice: '0', total: 0 }
    ],
    total: 0
  };

  test('decreases by 1 the quantity property of the object in index', () => {
    expect(actions.decreaseItemCount(1, order)).toEqual({
      id: 1,
      customerId: 1,
      items: [
        { quantity: 1, unitPrice: '0', total: 0 },
        { quantity: 1, unitPrice: '0', total: 0 }
      ],
      total: 0
    });
  });

  test('when quantity is 0, it returns the same order', () => {
    expect(actions.decreaseItemCount(0, order)).toEqual(order);
  });
});

describe('removeItem(index, order)', () => {
  const order = {
    id: 1,
    customerId: 1,
    items: [
      { quantity: 1, unitPrice: '0', total: 0 },
      { quantity: 2, unitPrice: '0', total: 0 }
    ],
    total: 0
  };

  test('removes the item in index', () => {
    expect(actions.removeItem(0, order)).toEqual({
      id: 1,
      customerId: 1,
      items: [{ quantity: 2, unitPrice: '0', total: 0 }],
      total: 0
    });
  });
});

describe('addItem(item, order)', () => {
  const existingProduct = {
    productId: 1,
    unitPrice: 10
  };
  const order = {
    items: [
      {
        ...existingProduct,
        quantity: 1
      }
    ]
  };

  test('adds the new item if it does not exist', () => {
    const newProduct = {
      productId: 2,
      unitPrice: 20
    };
    const expectedOrder = {
      items: [
        {
          ...existingProduct,
          quantity: 1
        },
        {
          ...newProduct,
          quantity: 1
        }
      ]
    };
    expect(actions.addItem(newProduct, order)).toEqual(expectedOrder);
  });

  test('it does change the order if the new product already exists', () => {
    expect(actions.addItem(existingProduct, order)).toEqual(order);
  });
});
