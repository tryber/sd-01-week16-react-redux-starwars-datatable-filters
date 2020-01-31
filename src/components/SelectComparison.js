import React from 'react';
import { connect } from 'react-redux';
import { ChooseComparison } from '../actions/actionDropdown';


function SelectComparison({ comparison, inputChange }) {
  return (
    <div>
      <select value={comparison} onChange={(e) => inputChange(e.target.value)}>
        <option value="bigger">MAIOR QUE</option>
        <option value="smaller">MENOR QUE</option>
        <option value="equal">IGUAL Á</option>
      </select>
    </div>
  );
}

const mapStateToProps = ({ filter: { comparison } }) => ({
  comparison,
});

const mapDispatchToProps = (dispatch) => ({
  inputChange: (comparison) => dispatch(ChooseComparison(comparison)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectComparison)
