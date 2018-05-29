export default {
  order: {
    api: {
      host: process.env.REACT_APP_ORDERS_API_HOST,
      orderPath: id => {
        if (id === null || id === undefined) {
          return process.env.REACT_APP_ORDERS_API_PATH;
        } else if (process.env.NODE_ENV === 'production') {
          // This is a hack which should be removed when API is deployed
          return `${process.env.REACT_APP_ORDERS_API_PATH}/${id}.json`;
        } else {
          return `${process.env.REACT_APP_ORDERS_API_PATH}/${id}`;
        }
      }
    }
  },
  products: {
    api: {
      host: process.env.REACT_APP_PRODUCTS_API_HOST,
      productsPath: process.env.REACT_APP_PRODUCTS_API_PATH
    }
  }
};
