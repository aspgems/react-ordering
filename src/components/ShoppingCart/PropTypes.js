import { PropTypes } from 'prop-types';

export const ProductPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string.isRequired,
  category: PropTypes.string
});

export const OrderPropType = PropTypes.shape({
  product: ProductPropType.isRequired,
  quantity: PropTypes.number.isRequired
});

export default { ProductPropType, OrderPropType };
