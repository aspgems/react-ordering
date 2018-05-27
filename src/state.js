// selectors
export const calculateOrderTotal = items => {
  return items.reduce((acc, item) => {
    return acc + item.total;
  }, 0);
};
export const calulateItemTotal = item => {
  return Number(parseFloat(item.quantity * item.unitPrice).toFixed(2));
};

// mutations
export const buildItem = item => {
  return {
    productId: item.productId,
    quantity: item.quantity,
    unitPrice: item.unitPrice,
    total: calulateItemTotal(item)
  };
};

export const itemsIncrease = (items, productId) => {
  return items.map(item => {
    if (item.productId === productId) {
      return buildItem({ ...item, quantity: item.quantity + 1 });
    }

    return buildItem({ ...item });
  });
};

export const itemsDecrease = (items, productId) => {
  return items.map(item => {
    if (item.productId === productId && item.quantity > 0) {
      return buildItem({ ...item, quantity: item.quantity - 1 });
    }

    return buildItem({ ...item });
  });
};

export const itemsRemove = (items, productId) => {
  return items.filter(item => item.productId !== productId);
};

// actions
export const increaseItem = productId => {
  return state => {
    const prevState = state.order;
    const items = itemsIncrease(prevState.items, productId);
    return {
      order: {
        id: prevState.id,
        customerId: prevState.customerId,
        items: items,
        total: calculateOrderTotal(items)
      }
    };
  };
};

export const decreaseItem = productId => {
  return state => {
    const prevState = state.order;
    const items = itemsDecrease(prevState.items, productId);
    return {
      order: {
        id: prevState.id,
        customerId: prevState.customerId,
        items: items,
        total: calculateOrderTotal(items)
      }
    };
  };
};

export const removeItem = productId => {
  return state => {
    const prevState = state.order;
    const items = itemsRemove(prevState.items, productId);
    return {
      order: {
        id: prevState.id,
        customerId: prevState.customerId,
        items: items,
        total: calculateOrderTotal(items)
      }
    };
  };
};

export default { removeItem, decreaseItem, increaseItem };
