import { connect } from 'react-redux';
import { testAction } from '../../services/actions';
import App from './component.jsx';

const mapStateToProps = state => ({
  hola: state.hola,
});

const mapDispatchToProps = dispatch => ({
  testAction: () => {
    dispatch(testAction());
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
