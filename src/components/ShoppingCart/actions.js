export function initState() {
  return {};
}

export function increaseItemCount(index, state) {
  // TODO we should be working with numbers, not Strings
  state.items[index].quantity = (
    Number(state.items[index].quantity) + 1
  ).toString();
  return state;
}

export function decreaseItemCount(index, state) {
  if (state.items[index].quantity > 1) {
    // TODO we should be working with numbers, not Strings
    state.items[index].quantity = (
      Number(state.items[index].quantity) - 1
    ).toString();
  }
  return state;
}

export function removeItem(index, state) {
  state.items.splice(index, 1);

  return state;
}

export function addItem(item, state) {
  const duplicated = state.items.find(e => e.productId === item.id);
  if (!duplicated) {
    state.items.push({
      productId: item.id,
      quantity: 1,
      unitPrice: item.price,
      total: parseFloat(item.price)
    });

    state.total += parseFloat(item.price);
  }
  return state;
}
