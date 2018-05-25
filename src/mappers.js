export function product2orderItem(product) {
  return {
    productId: product.id,
    quantity: 1,
    unitPrice: product.price
  };
}

export function parseOrderJSON(data) {
  return {
    id: Number(data.id),
    customerId: Number(data.id),
    items: data.items.map(function(item) {
      return {
        productId: item.productId,
        quantity: Number(item.quantity),
        unitPrice: Number(parseFloat(item.unitPrice).toFixed(2))
      };
    })
  };
}

export function parseProductJSON(data) {
  return {
    id: data.id,
    description: data.description,
    category: data.category,
    price: Number(parseFloat(data.unitPrice).toFixed(2))
  };
}

export default { product2orderItem, parseOrderJSON };
