import React from 'react';
import Login from './Login';
import Signup from './Signup';
import auth from './../utils/Authentication';
import Dashboard from './Dashboard';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn:auth.loggedIn()
    }
  }

  refresh=()=>{
    this.forceUpdate();
  }   

  logout=()=>{
      auth.logout();
      this.refresh();
  }

  render(){
    return (
      <div className="App">
        
        {!auth.loggedIn() 
          ?
          <div>
            <h1>M E D D O &nbsp; | &nbsp; L O G I N</h1>
            <div className="homepage">
              <Login/>
              <Signup/>
            </div>
          </div>
          
          :
          <div>
            <h1>M E D D O &nbsp; | &nbsp; D A S H B O A R D</h1>
            <Dashboard logout={this.logout} />
          </div>
        }
      </div>
    )
  }
}

export default App;
