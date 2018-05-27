const itemTotal = item => item.quantity * item.unitPrice;
const itemsTotal = items => items.reduce((a, b) => itemTotal(a) + itemTotal(b));

export function initState() {
  return {
    id: null,
    customerId: null,
    items: [],
    total: 0
  };
}

// This should be called from the Order Component, not from App
export function increaseItemCount(productId) {
  return function(prevState, props) {
    // console.log('productId' + productId);
    // console.log(props);
    // const order = props;
    // let newOrder = Object.assign({}, order);

    // const item = order.items.find(item => item.productId === productId);
    console.log(prevState);
    console.log(props);
    console.log(productId);
    let newItem = Object.assign({}, prevState);
    newItem.quantity += 1;
    newItem.total = newItem.quantity * newItem.unitPrice;
    return newItem;

    // const items = order.items.map(item => {
    // if (item.productId === productId) {
    // return newItem;
    // }
    // return item;
    // });
    // newOrder.items = items;

    // return Object.assign(
    // {},
    // order,
    // { items: items },
    // { total: itemsTotal(items) }
    // );
  };
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

export default {
  initState,
  increaseItemCount,
  decreaseItemCount,
  removeItem,
  addItem
};
