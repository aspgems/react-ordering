export function product2orderItem(product) {
  return {
    productId: product.id,
    quantity: 1,
    unitPrice: product.price
  };
}

export default { product2orderItem };
