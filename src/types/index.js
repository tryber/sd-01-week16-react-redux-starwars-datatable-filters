import PropTypes from 'prop-types';

const filtersType = PropTypes.arrayOf(PropTypes.shape({
  column: PropTypes.string,
  value: PropTypes.string,
  comparison: PropTypes.string,
}));

export default filtersType;
