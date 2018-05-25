import { PropTypes } from 'prop-types';

export const ProductPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  category: PropTypes.string
});

export default { ProductPropType };
