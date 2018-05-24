import { NAMESPACE } from './config';

export function initState() {
  return [];
}

export function increaseItemCount(index, state) {
  state[index].quantity += 1;
  return { [NAMESPACE]: state };
}

export function decreaseItemCount(index, state) {
  if (state[index].quantity > 0) {
    state[index].quantity -= 1;
  }
  return { [NAMESPACE]: state };
}

export function removeItem(index, state) {
  state.splice(index, 1);
  return { [NAMESPACE]: state };
}

export function addItem(item, state) {
  const duplicated = state.find(e => e.product.id === item.id);
  if (!duplicated) {
    state.push({
      product: item,
      quantity: 1
    });
    return { [NAMESPACE]: state };
  }
}
