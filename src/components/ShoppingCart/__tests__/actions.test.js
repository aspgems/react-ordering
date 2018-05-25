import * as actions from '../actions';

describe('initState', () => {
  test('returns an empty object', () => {
    expect(actions.initState()).toEqual({});
  });
});

describe('increaseItemCount(index, state)', () => {
  const state = {
    id: 1,
    customerId: 1,
    items: [
      { quantity: 1, unitPrice: '0', total: 0 },
      { quantity: 2, unitPrice: '0', total: 0 }
    ],
    total: 0
  };

  test('increases by 1 the quantity property of the object in index', () => {
    expect(actions.increaseItemCount(0, state)).toEqual({
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

describe('decreaseItemCount(index, state)', () => {
  const state = {
    id: 1,
    customerId: 1,
    items: [
      { quantity: 1, unitPrice: '0', total: 0 },
      { quantity: 2, unitPrice: '0', total: 0 }
    ],
    total: 0
  };

  test('decreases by 1 the quantity property of the object in index', () => {
    expect(actions.decreaseItemCount(1, state)).toEqual({
      id: 1,
      customerId: 1,
      items: [
        { quantity: 1, unitPrice: '0', total: 0 },
        { quantity: 1, unitPrice: '0', total: 0 }
      ],
      total: 0
    });
  });

  test('when quantity is 0, it returns the same state', () => {
    expect(actions.decreaseItemCount(0, state)).toEqual(state);
  });
});

describe('removeItem(index, state)', () => {
  const state = {
    id: 1,
    customerId: 1,
    items: [
      { quantity: 1, unitPrice: '0', total: 0 },
      { quantity: 2, unitPrice: '0', total: 0 }
    ],
    total: 0
  };

  test('removes the item in index', () => {
    expect(actions.removeItem(0, state)).toEqual({
      id: 1,
      customerId: 1,
      items: [{ quantity: 2, unitPrice: '0', total: 0 }],
      total: 0
    });
  });
});

describe('addItem(item, state)', () => {
  const existingProduct = { id: 1, price: '0' },
    state = {
      id: 1,
      customerId: 1,
      items: [{ productId: 1, quantity: 1, unitPrice: '0', total: 0 }],
      total: 0
    };

  test('adds the new item if it does not exist in state', () => {
    const newProduct = { id: 2, price: '0' };
    const expectedState = {
      id: 1,
      customerId: 1,
      items: [
        { productId: 1, quantity: 1, unitPrice: '0', total: 0 },
        { productId: 2, quantity: 1, unitPrice: '0', total: 0 }
      ],
      total: 0
    };
    expect(actions.addItem(newProduct, state)).toEqual(expectedState);
  });

  test('it does change the state if the new product already exists', () => {
    expect(actions.addItem(existingProduct, state)).toEqual(state);
  });
});
