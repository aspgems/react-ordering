import config from '../config';

const getProducts = () => {
  return fetch(
    config.products.api.host + config.products.api.productsPath
  ).then(response => response.json());
};

export default {
  getProducts
};
