import React from 'react';
import auth from '../utils/Authentication';

class Dashboard extends React.Component{
    render(){
        const user = auth.getProfile();
        return(
            <div>
                <div>
                    <h1>PROFILE</h1>
                    <h1>Hello! {user.name}</h1>
                    <img src={user.picture} alt="Not_Found"/>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            </div>
        )
    }
}

export default Dashboard;