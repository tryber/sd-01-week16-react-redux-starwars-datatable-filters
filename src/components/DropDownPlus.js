import React, {Component} from 'react';
import { connect } from 'react-redux';
import { chooseColumnName, ChooseComparison, placeAnInput } from '../actions/actionDropdown';

class DropDownPlus extends Component {
  render(){
    return(
      <form onSubmit={this.handleSubmit}>

        </form>
    )
  }

}
function chooseColumn({ column, inputChangeColumn }) {
  return (
    <div>
      <select value={column} onChange={(e) => inputChangeColumn(e.target.value)}>
        <option value="population">POPULAÇÃO</option>
        <option value="orbital_period">DURAÇÃO DA ORBITA</option>
        <option value="diameter">DIÂMENTRO</option>
        <option value="rotation_period">DURAÇÃO DA ROTAÇÃO</option>
        <option value="surface_water">SUPERFÍCIE DE ÁGUA</option>
      </select>
    </div>
  );
}

function chooseComp({ comparison, inputChangeComp }) {
  return (
    <div>
      <select value={comparison} onChange={(e) => inputChangeComp(e.target.value)}>
        <option value="bigger">MAIOR QUE</option>
        <option value="smaller">MENOR QUE</option>
        <option value="equal">IGUAL Á</option>
      </select>
    </div>
  );
}

function input({ value, inputChangeInput }) {
  return (
    <form onChange={(e) => inputChangeInput(e.target.value)}>
      <input type="number" value={value} />
    </form>
  );
}

const DropDownPlus = () => (
  <div>
    {chooseColumn}
    <br />
    {chooseComp}
    <br />
    {input}
  </div>
);

const mapStateToProps = ({ filter: { column, comparison, value } }) => ({
  column,
  comparison,
  value,
});

const mapDispatchToProps = (dispatch) => ({
  inputChangeColumn: (column) => dispatch(chooseColumnName(column)),
  inputChangeComp: (comparison) => dispatch(ChooseComparison(comparison)),
  inputChangeInput: (value) => dispatch(placeAnInput(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownPlus);
