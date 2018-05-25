export const NAMESPACE = 'shoppingCart';
// export const API_HOST = 'https://raw.githubusercontent.com';
export const API_HOST = '';
export function orderPath(id) {
  // return '/aspgems/react-ordering/master/public/data/orders' + id + '.json';
  return '/data/orders/' + id + '.json';
}
