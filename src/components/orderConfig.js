export default {
  api: {
    host: '',
    orderPath: id => {
      return '/data/orders/' + id + '.json';
    }
  }
};
