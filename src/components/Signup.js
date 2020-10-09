import React from "react";
import auth from "../utils/Authentication";

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:'',
            confirmPassword:''
        }
    }

    handelSubmit = (e)=>{
        e.preventDefault();
        auth.signup(this.state.email,this.state.password,this.state.confirmPassword);
    }

    render(){
        return(
            <div className="login">
                <h1>SignUp</h1>
                <form onSubmit={this.handelSubmit}>
                    <input type="email" placeholder="Enter the Email" onChange={(e)=>{this.setState({email:e.target.value})}} />
                    <input type="password" placeholder="Enter the Password" onChange={(e)=>{this.setState({password:e.target.value})}} />
                    <input type="password" placeholder="Enter the above Password" onChange={(e)=>{this.setState({confirmPassword:e.target.value})}} />
                    <button type="submit">SignUp</button>
                </form>
            </div>            
        )
    }
}
export default Signup;