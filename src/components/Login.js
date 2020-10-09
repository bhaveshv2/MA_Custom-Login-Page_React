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

    handelSubmit = (e)=>{
        e.preventDefault();
        auth.login(this.state.email,this.state.password);
    }

    render(){
        return(
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={this.handelSubmit}>
                    <input type="email" placeholder="Enter your Email" onChange={(e)=>{this.setState({email:e.target.value})}} />
                    <input type="password" placeholder="Enter your password" onChange={(e)=>{this.setState({password:e.target.value})}} />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;