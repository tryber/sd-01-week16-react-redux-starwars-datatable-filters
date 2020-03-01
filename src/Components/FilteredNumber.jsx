import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    this.changeState = this.changeState.bind(this);
    this.filterValue = this.filterValue.bind(this);
    this.verifyFilter = this.verifyFilter.bind(this);
    this.radioGenerator = this.radioGenerator.bind(this);
  }

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
    return numeric_values.map((value) => (
      <ul key={value}>
        {Object.values(value).map((tag) => (
          <ol key={tag}>
            {tag}
          </ol>
        ))}
        <button type="button" onClick={() => removeFilterPlanets(value)}>x</button>
      </ul>
    ));
  }

  verifyFilter(column) {
    const { numeric_values } = this.props;
    return numeric_values.find((filtersActive) => filtersActive.select === column);
  }

  radioGenerator() {
    return (
      <div className="radio-comparison">
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
    );
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
          {this.radioGenerator()}
          <input
            className="input-number-comparison"
            type="text"
            onChange={(e) => this.changeState(e, 'value')}
            placeholder="Coloque a quantidade aquii"
          />
          {select
          && value
          && comparison
          && <button className="btn" type="button" onClick={(event) => this.valueStore(event)}>filtrar </button>}
        </div>
        <div>{this.filterValue()}</div>
      </div>
    );
  }
}

FilteredNumber.propTypes = {
  filter: PropTypes.func.isRequired,
  removeFilterPlanets: PropTypes.func.isRequired,
  numeric_values: PropTypes.arrayOf(PropTypes.shape({})),
};
FilteredNumber.defaultProps = {
  numeric_values: [],
};
const mapStateToProps = ({ filters: { numeric_values } }) => ({ numeric_values });

const mapDispatchToProps = (dispatch) => ({
  filter: (value) => dispatch(changeFilter(value)),
  removeFilterPlanets: (value) => dispatch(removeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilteredNumber);
