// selectors
const calculateOrderTotal = items => {
  return items.reduce((acc, item) => {
    return acc + item.total;
  }, 0);
};

const calulateItemTotal = item => {
  return Number(parseFloat(item.quantity * item.unitPrice).toFixed(2));
};

const getProductById = (products, productId) => {
  return products.find(product => {
    return product.id === productId;
  });
};

// builders
const productToItem = product => {
  return buildItem({
    productId: product.id,
    unitPrice: product.price,
    quantity: 1
  });
};

const buildItem = item => {
  return {
    productId: item.productId,
    quantity: item.quantity,
    unitPrice: item.unitPrice,
    total: calulateItemTotal(item)
  };
};

// reducers
const itemsIncrease = (items, productId) => {
  return items.map(item => {
    if (item.productId === productId) {
      return buildItem({ ...item, quantity: item.quantity + 1 });
    }

    return buildItem({ ...item });
  });
};

const itemsDecrease = (items, productId) => {
  return items.map(item => {
    if (item.productId === productId && item.quantity > 0) {
      return buildItem({ ...item, quantity: item.quantity - 1 });
    }

    return buildItem({ ...item });
  });
};

const itemsRemove = (items, productId) => {
  return items.filter(item => item.productId !== productId);
};

const itemsAdd = (items, item) => {
  return items.concat(item);
};

// actions
const increaseItem = productId => {
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

const decreaseItem = productId => {
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

const removeItem = productId => {
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

const addToCart = item => {
  return state => {
    const prevState = state.order;
    const items = itemsAdd(prevState.items, item);
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

export default {
  removeItem,
  decreaseItem,
  increaseItem,
  addToCart,
  getProductById,
  productToItem
};
