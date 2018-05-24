import * as actions from './actions';

describe('initState', () => {
  test('returns an empty array', () => {
    expect(actions.initState()).toEqual([]);
  });
});

describe('increaseItemCount(index, state)', () => {
  const state = [{ quantity: 1 }, { quantity: 2 }];
  test('increases by 1 the quantity property of the object in index', () => {
    expect(actions.increaseItemCount(0, state)).toEqual([
      { quantity: 2 },
      { quantity: 2 }
    ]);
  });
});

describe('decreaseItemCount(index, state)', () => {
  const state = [{ quantity: 1 }, { quantity: 2 }];
  test('decreases by 1 the quantity property of the object in index', () => {
    expect(actions.decreaseItemCount(1, state)).toEqual([
      { quantity: 1 },
      { quantity: 1 }
    ]);
  });
  test('when quantity is 0, it returns the same state', () => {
    expect(actions.decreaseItemCount(0, state)).toEqual(state);
  });
});

describe('removeItem(index, state)', () => {
  const state = [1, 2];
  test('removes the item in index', () => {
    expect(actions.removeItem(0, state)).toEqual([2]);
  });
});

describe('addItem(item, state)', () => {
  const existingProduct = { id: 1 };
  const state = [{ product: existingProduct, quantity: 1 }];
  test('adds the new item if it does not exist in state', () => {
    const newProduct = { id: 2 };
    const expectedState = [
      { product: existingProduct, quantity: 1 },
      { product: newProduct, quantity: 1 }
    ];
    expect(actions.addItem(newProduct, state)).toEqual(expectedState);
  });
  test('it does change the state if the new product already exists', () => {
    expect(actions.addItem(existingProduct, state)).toEqual(state);
  });
});
