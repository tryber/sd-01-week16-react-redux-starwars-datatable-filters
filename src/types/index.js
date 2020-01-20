import PropTypes from 'prop-types';

export const filtersType = PropTypes.shape([{
  column: PropTypes.string,
  value: PropTypes.number,
  comparison: PropTypes.string,
}]);
