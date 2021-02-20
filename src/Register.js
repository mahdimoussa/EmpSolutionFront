import axios from 'axios';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.scss';
class Register extends Component {
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
register = ()=>{
    if(this.state.name !== "" && this.state.password !== "" && this.state.email !== "" ){
        const data = {
			name:this.state.name,
			password:this.state.password,
			email:this.state.email,
            type:"User"
		}
		axios.post(this.state.url + "signup", data).then((response)=>{
            if(response.data != 0){
            this.setState({ redirect: true });

			}
		});
    }
  }
  render() {

    let temp;
    if(this.state.redirect == false )
    {
        temp = (
            <div>
                <div className="header">Customer Register</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="name" onChange={this.nameHandler} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" onChange={this.emailHandler}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" onChange={this.passwordHandler} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={this.register} type="button" className="btn btn-primary">
            Register
          </button>
        </div>
            </div>
        )
        ;
    }else{
        temp = (<div><h1>Thank you</h1></div>);
    }
    return (
      <div style={{backgroundColor:'#adb5bd'}} className="base-container" ref={this.props.containerRef}>
        <nav style={{marginLeft:'-90%', marginTop:'2%'}}>
            
          <ul>
              <li>
                <Link style={{color:'#000'}} to="/"> Customer Register</Link>
              </li>
              <li>
                <Link style={{color:'#000'}} to="/login">Admin Login</Link>
              </li></ul>
            
          </nav>
  
        {temp}
      </div>
    );
  }
}
export default Register;
