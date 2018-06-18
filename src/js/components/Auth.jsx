/* eslint-disable no-unused-vars */
import React from 'react';
import firebase from '../services/firebase';
/* eslint-ensable no-unused-vars */

const provider = new firebase.auth.GoogleAuthProvider();

const Auth = (props) => {
  const { setUser } = props;
  const handleSuccess = (result) => {
    setUser(result);
  };

  const handleError = () => {}; // TODO: handle error
  const loginWithGoogle = () => {
    firebase.auth().signInWithPopup(provider)
      .then(handleSuccess)
      .then(handleError);
  };
  return (<div>
    <button onClick={loginWithGoogle}>Login With Google</button>
  </div>);
};
export default Auth;
