export default {
  order: {
    api: {
      host: '',
      orderPath: id => {
        return '/data/orders/' + id + '.json';
      }
    }
  },
  products: {
    api: {
      host: 'https://raw.githubusercontent.com',
      productsPath: '/aspgems/react-ordering/master/public/data/products.json'
    }
  }
};
