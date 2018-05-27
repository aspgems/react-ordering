import * as actions from '../actions';

describe('initState', () => {
  test('returns our empty state', () => {
    expect(actions.initState().id).toBe(null);
    expect(actions.initState().customerId).toBe(null);
    expect(actions.initState().items).toEqual([]);
    expect(actions.initState().total).toBe(0);
  });
});

describe('increaseItemCount', () => {
  const state = {
    id: 1,
    customerId: 1,
    items: [
      { productId: 1, quantity: 1, unitPrice: 10, total: 10 },
      { productId: 2, quantity: 2, unitPrice: 20, total: 40 }
    ],
    total: 50
  };

  test('increases by 1 the quantity property of the object in index', () => {
    expect(actions.increaseItemCount(1, state)).toEqual({
      id: 1,
      customerId: 1,
      items: [
        { productId: 1, quantity: 2, unitPrice: 10, total: 20 },
        { productId: 2, quantity: 2, unitPrice: 20, total: 40 }
      ],
      total: 60
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
