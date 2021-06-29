import React, {Component} from "react";
import axios from "axios";
import PaginationTableComponent from "../../PaginationTableComponent";
import {CustomerAppBar} from "../containers/CustomerAppBar";


export class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "http://localhost:8000/api/",
            averagelastday: 0,
            averagelastweek: 0,
            averagelastmonth: 0,
            averagelastthreemonths: 0,
            averagelastyear: 0,
            data: []
        }
    }

    componentDidMount() {
        this.getCustomers(20)
    }

    getCustomers(pageSize) {
        axios.post(this.state.url + "customers", {customersPerPage: pageSize}).then((response) => {
            console.log(response.data.data)
            this.setState({data: response.data.data})
        });
    }

    render() {
        return (
            <>
                <CustomerAppBar/>
                <PaginationTableComponent data={this.state.data}/>
            </>

        );
    }
}
