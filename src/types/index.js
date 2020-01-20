import PropTypes from 'prop-types';

const filtersType = PropTypes.shape([{
  column: PropTypes.string,
  value: PropTypes.number,
  comparison: PropTypes.string,
}]);

export default filtersType;
