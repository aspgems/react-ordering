export function initState() {
  return {};
}

export function increaseItemCount(index, state) {
  let unitPrice = parseFloat(state.items[index].unitPrice);

  state.items[index].quantity += 1;
  state.items[index].total += unitPrice;
  state.total += unitPrice;
  return state;
}

export function decreaseItemCount(index, state) {
  let unitPrice = parseFloat(state.items[index].unitPrice);

  if (state.items[index].quantity > 1) {
    state.items[index].quantity -= 1;
    state.items[index].total -= unitPrice;
    state.total -= unitPrice;
  }
  return state;
}

export function removeItem(index, state) {
  let subTotal = state.items[index].total;

  state.items.splice(index, 1);
  state.total -= subTotal;

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
