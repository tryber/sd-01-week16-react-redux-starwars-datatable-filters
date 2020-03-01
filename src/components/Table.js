import React from 'react';
import { connect } from 'react-redux';

const Table = ({ table }) => {
  return (
    <div>
      <div>StarWars Datatable with Filters</div>
      <div>
        { table.map((planet) => planet.name) }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  table: state.data,
});

export default connect(mapStateToProps)(Table);
