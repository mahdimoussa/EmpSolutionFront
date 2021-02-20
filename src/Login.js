import axios from 'axios';
import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import './App.scss';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        url:"http://localhost:8000/api/",     
        name:"",
        email:"",
        password:"",
        redirect: false  
    }
}

emailHandler = (e)=>{
    this.setState({
        email : e.target.value
    })
}
nameHandler = (e)=>{
    this.setState({
        name : e.target.value
    })
}
passwordHandler = (e)=>{
    this.setState({
        password : e.target.value
    })
}
login = ()=>{
    if(this.state.password !== "" && this.state.email !== "" ){
        const data = {
			password:this.state.password,
			email:this.state.email,
            type:"Admin"
		}
		axios.post(this.state.url + "login", data).then((response)=>{
            if(response.data !=  null && response.data.type == "Admin"){
            localStorage.setItem("loggedIn","True")
            this.setState({ redirect: true });

			}
		});
    }
  }
  render() {
    if (this.state.redirect == true)
    return <Redirect to = "/dashboard" />

    return (
      <div style={{backgroundColor:'#adb5bd'}} className="base-container" ref={this.props.containerRef}>
        <nav style={{marginLeft:'-90%', marginTop:'2%'}}>
            
            <ul>
                <li>
                  <Link style={{color:'#000'}} to="/">Customer Register</Link>
                </li>
                <li>
                  <Link style={{color:'#000'}} to="/login">Admin Login</Link>
                </li></ul>
              
            </nav>
  <div>
    <div className="header">Admin Login</div>
    <div style={{marginRight:'16%'}} className="content">
      <div className="image"></div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.emailHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={this.passwordHandler}
          />
        </div>
      </div>
    </div>
    <div className="footer">
      <button onClick={this.login} type="button" className="btn btn-primary">
        Login
      </button>
    </div>
  </div>
</div>
    );
  }
}
export default Login;
