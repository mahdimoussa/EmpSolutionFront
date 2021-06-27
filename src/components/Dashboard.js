import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import {
    Link
} from "react-router-dom";
import '../App.scss';
import PaginationTableComponent from '../PaginationTableComponent.js';
import {DashboardAppBar} from "./containers/DashboardAppBar";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:"http://3.22.100.202:8000/api/",
            averagelastday:0,
            averagelastweek:0,
            averagelastmonth:0,
            averagelastthreemonths:0,
            averagelastyear:0,
            data:[]
        }
 
    
        

    }
    componentDidMount()
    {
        this.getAvg("averagelastday")
        this.getAvg("averagelastweek")
        this.getAvg("averagelastmonth")
        this.getAvg("averagelastthreemonths")
        this.getAvg("averagelastyear")
        this.getCustomers(20)

    }
    getAvg = (key)=>{
            axios.get(this.state.url + "customers/" + key).then((response)=>{
                this.setState({key:response})
            });
      }
    getCustomers(pageSize){
        axios.post(this.state.url + "customers", {customersPerPage:pageSize}).then((response)=>{
            console.log(response)
            this.setState({data:response.data.data})
        });
    }

render() {
    return (
<div>
    <DashboardAppBar/>

 <div>
  <h3>
  Last 24 Hours Registrations <Badge variant="secondary">{this.state.averagelastday}</Badge>
  </h3>
  <h3>
  Last Week Registrations <Badge variant="secondary">{this.state.averagelastweek}</Badge>
  </h3>
  <h3>
  Last Month Registrations <Badge variant="secondary">{this.state.averagelastmonth}</Badge>
  </h3>
  <h3>
  Last 3 Months Registrations <Badge variant="secondary">{this.state.averagelastthreemonths}</Badge>
  </h3>
  <h3>
  Last Year Registrations <Badge variant="secondary">{this.state.averagelastyear}</Badge>
  </h3>

</div>
    </div>
    );
 }
}
export default Dashboard;
