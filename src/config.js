export default {
  order: {
    api: {
      host: 'http://localhost:3001',
      orderPath: id => {
        if (id === null || id === undefined) {
          return 'orders';
        }

        return '/orders/' + id;
      }
    }
  },
  products: {
    api: {
      host: 'http://localhost:3001',
      productsPath: '/products'
    }
  }
};
