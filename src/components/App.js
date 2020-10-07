import React from 'react';
import Login from './Login';
import Signup from './Signup';
import auth from './../utils/Authentication';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn:auth.loggedIn()
    }
  }

  render(){
    return (
      <div className="App">
        <Login />
        <Signup />
      </div>
    )
  }
}

export default App;
