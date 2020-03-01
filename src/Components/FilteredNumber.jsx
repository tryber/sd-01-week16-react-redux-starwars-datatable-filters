import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFilter, removeFilter } from '../Actions/actions';
import '../Style/FilteredNumber.css';


class FilteredNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: '',
      comparison: '',
      value: '',
    };
    this.valueStore = this.valueStore.bind(this);
  }

  // filterMain() {
  //   const { numeric_values } = this.props;
  //   const { select, comparison, value } = this.state;

  //   if (comparison === '' || value === '' || select === '') {
  //     return alert('tá faltando dado aí!');
  //   }
  //   switch (comparison) {
  //     case 'Maior que':
  //       return numeric_values.filter((planet) => {
  //         return planet[select] > value && planet[select] !== 'unknown';
  //       });
  //     case 'Menor que':
  //       return numeric_values.filter((planet) => {
  //         return planet[select] < Number(value) && planet[select] !== 'unknown';
  //       });
  //     case 'Igual a':
  //       return numeric_values.filter((planet) => {
  //         return planet[select] === value && planet[select] !== 'unknown';
  //       });
  //     default:
  //       break;
  //   }
  // }

  valueStore(event) {
    event.preventDefault();
    const { select, comparison, value } = this.state;
    const { filter } = this.props;
    filter({ select, comparison, value });
    this.setState({ select: '' });
  }

  changeState(event, id) {
    this.setState({
      [id]: event.target.value,
    });
  }

  filterValue() {
    const { numeric_values, removeFilterPlanets } = this.props;


    return numeric_values.map((value) => {
      return (
        <ul key={value}>
          {Object.values(value).map((tag) => (
            <ol key={tag}>
              {tag}
            </ol>
          ))}
          <button type="button" onClick={() => removeFilterPlanets(value)}>x</button>
        </ul>
      );
    });
  }

  verifyFilter(column) {
    const { numeric_values } = this.props;
    return numeric_values.find((filtersActive) => filtersActive.select === column);
  }

  render() {
    const { select, comparison, value } = this.state;
    return (
      <div>
        <div className="content-filter">
          <select className="select-comparison" onChange={(e) => this.changeState(e, 'select')}>
            <option>Selecione uma opção</option>
            {!this.verifyFilter('population') && <option value="population">Population</option>}
            {!this.verifyFilter('orbital_period') && <option value="orbital_period">Orbital_period</option>}
            {!this.verifyFilter('diameter') && <option value="diameter">Diameter</option>}
            {!this.verifyFilter('rotation_period') && <option value="rotation_period">Rotation_period</option>}
            {!this.verifyFilter('surface_water') && <option value="surface_water">Surface_water</option>}
          </select>
          <div className="radio-coparison">
            <input
              data-testid="radio-comparison-maior"
              type="radio"
              name="comparison"
              value="Maior que"
              onClick={(e) => this.changeState(e, 'comparison')}
            />
            Maior que
            <input
              data-testid="radio-comparison-menor"
              type="radio"
              name="comparison"
              value="Menor que"
              onClick={(e) => this.changeState(e, 'comparison')}
            />
            Menor que
            <input
              data-testid="radio-comparison-igual"
              type="radio"
              name="comparison"
              value="Igual a"
              onClick={(e) => this.changeState(e, 'comparison')}
            />
            Igual a
          </div>
          <input
            className="input-number-comparison"
            type="text"
            onChange={(e) => this.changeState(e, 'value')}
            placeholder="Coloque a quantidade aquii"
          />
          {select && value && comparison && <button className="btn" type="button" onClick={(event) => this.valueStore(event)}>filtrar </button>}
        </div>
        <div>{this.filterValue()}</div>
      </div>
    );
  }
}
const mapStateToProps = ({ filters: { numeric_values } }) => ({ numeric_values });

const mapDispatchToProps = (dispatch) => ({
  filter: (value) => dispatch(changeFilter(value)),
  removeFilterPlanets: (value) => dispatch(removeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilteredNumber);
