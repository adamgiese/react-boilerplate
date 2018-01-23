/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { testAction } from '../services/actions';
/* eslint-ensable no-unused-vars */

const mapStateToProps = state => ({
  hola: state.hola,
});

const mapDispatchToProps = dispatch => ({
  dispatchTestAction: () => {
    dispatch(testAction());
  },
});

const App = (props) => {
  const {
    hola,
    dispatchTestAction,
  } = props;
  return (
    <div className='app'>
      { hola ?
        <h1 className='app-title'>Hola, {hola}!</h1>
        : <button onClick={() => dispatchTestAction()}>Click Me</button>
      }
    </div>
  );
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
