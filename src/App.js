import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAXSPSo7Gk7HiCcasXukFGA7h0ANVEJukY',
      authDomain: 'manager-4a74e.firebaseapp.com',
      databaseURL: 'https://manager-4a74e.firebaseio.com',
      projectId: 'manager-4a74e',
      storageBucket: '',
      messagingSenderId: '952806959764'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
