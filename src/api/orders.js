import config from '../config';

const createOrUpdateOrder = order => {
  if (defined(order.id)) {
    return updateOrder(order);
  }

  return createOrder(order);
};

const defined = object => {
  return object !== null && object !== undefined;
};

const createOrder = order => {
  return fetch(config.order.api.host + config.order.api.orderPath(), {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(order)
  }).then(response => response.json());
};

const updateOrder = order => {
  return fetch(config.order.api.host + config.order.api.orderPath(order.id), {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(order)
  }).then(response => response.json());
};

const getOrder = id => {
  return fetch(config.order.api.host + config.order.api.orderPath(id)).then(
    response => response.json()
  );
};

export default {
  createOrUpdateOrder,
  createOrder,
  updateOrder,
  getOrder
};
