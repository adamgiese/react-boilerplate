/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
/* eslint-ensable no-unused-vars */

const mapStateToProps = state => ({
  username: state.user.displayName,
});

const LoggedIn = (props) => {
  const {
    username,
  } = props;

  return (
    <div>
      <div className='nav-bar'>
        Hello, {username}!
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(LoggedIn);
