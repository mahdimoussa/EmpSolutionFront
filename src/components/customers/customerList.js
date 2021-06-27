import React, {Component, useEffect, useState} from "react";
import {
    ArrayField,
    BooleanInput,
    ChipField,
    Datagrid,
    EditButton,
    Filter,
    List,
    SelectInput,
    ShowButton,
    SingleFieldList,
    TextField,
    TextInput,
} from "react-admin";
import axios from "axios";
import PaginationTableComponent from "../../PaginationTableComponent";
import {AppBarCustom} from "../containers/AppBar";
import {CustomerAppBar} from "../containers/CustomerAppBar";


export class CustomerList extends Component {
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
        this.getCustomers(20)
    }
    getCustomers(pageSize){
        axios.post(this.state.url + "customers", {customersPerPage:pageSize}).then((response)=>{
            console.log(response.data.data)
            this.setState({data:response.data.data})
        });
    }
    render() {
        return (
            <>
                <CustomerAppBar/>
                <PaginationTableComponent data={this.state.data}/>
            </>

    );}
};
