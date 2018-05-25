export function initState() {
  return {
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
}

export function increaseItemCount(index, state) {
  state[index].quantity += 1;
  return state;
}

export function decreaseItemCount(index, state) {
  if (state[index].quantity > 0) {
    state[index].quantity -= 1;
  }
  return state;
}

export function removeItem(index, state) {
  state.splice(index, 1);
  return state;
}

export function addItem(item, state) {
  const duplicated = state.find(e => e.product.id === item.id);
  if (!duplicated) {
    state.push({
      product: item,
      quantity: 1
    });
  }
  return state;
}
