import React from "react";
import auth from "../utils/Authentication";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }
    }

    refresh=()=>{
        this.forceUpdate();
    }    

    handelSubmit = (e)=>{
        e.preventDefault();
        auth.login(this.state.email,this.state.password);
    }

    logout=()=>{
        auth.logout();
        this.refresh();
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div>
                    {auth.loggedIn()
                        ?
                            <button onClick={this.logout}>Logout</button>
                        :
                            <form onSubmit={this.handelSubmit}>
                                <input type="email" placeholder="Enter your Email" onChange={(e)=>{this.setState({email:e.target.value})}} />
                                <input type="password" placeholder="Enter your password" onChange={(e)=>{this.setState({password:e.target.value})}} />
                                <button type="submit">Login</button>
                            </form>
                    }
                </div>
            </div>
        )
    }
}

export default Login;