/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../services/actions';
import Auth from './Auth.jsx';
import LoggedIn from './LoggedIn.jsx';
/* eslint-ensable no-unused-vars */

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  dispatchSetUser: (user) => {
    dispatch(setUser(user));
  },
});

const App = (props) => {
  const {
    dispatchSetUser,
    user,
  } = props;

  return (
    <div className='app'>
      { user
        ? <LoggedIn />
        : <Auth setUser={dispatchSetUser} />
      }
    </div>
  );
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
