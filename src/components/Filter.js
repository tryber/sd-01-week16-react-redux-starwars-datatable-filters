import React from 'react';
import { connect } from 'react-redux';

function Filter(props) {
  return (
    <div>
      <input value={props.inputValue} placeholder="Digite o nome do planeta aqui" />
      <p>{props.inputValue}</p>
    </div>
  );
}

const mapStateToProps ()
