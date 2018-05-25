export function initState() {
  return {
    id: null,
    customerId: null,
    items: [],
    total: 0
  };
}

export function increaseItemCount(index, order) {
  order.items[index].quantity = order.items[index].quantity + 1;
  return order;
}

export function decreaseItemCount(index, order) {
  if (order.items[index].quantity > 1) {
    order.items[index].quantity = order.items[index].quantity - 1;
  }
  return order;
}

export function removeItem(index, order) {
  order.items.splice(index, 1);

  return order;
}

export function addItem(item, order) {
  const duplicated = order.items.find(e => e.productId === item.productId);
  if (!duplicated) {
    order.items.push({
      productId: item.productId,
      quantity: 1,
      unitPrice: item.unitPrice
    });
  }
  return order;
}
