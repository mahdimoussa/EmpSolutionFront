import axios from 'axios';
import CardContent from "@material-ui/core/CardContent";
import React, { Component } from 'react';
import LockIcon from "@material-ui/icons/Lock";
import { Link, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    Box,
    TextField,
    Button,
    Card,
    makeStyles,
    Avatar,
} from "@material-ui/core";
import '../../App.scss';
import {AppBarCustom} from "../containers/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme)=>({
    hover: {
        "&:hover": {
            backgroundColor: "white !important"
        }
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    main: {
        height: "1px",
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        flexDirection: "column",
        backgroundSize: "cover",
        justifyContent: "flex-start",
        backgroundImage:
            "radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)",
        backgroundRepeat: "no-repeat",
    },
    card: {
        width: "300px",
        marginTop: "6em",
        overflow: "hidden",
        boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        borderRadius: "4px",
        color: "rgba(0, 0, 0, 0.87)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        backgroundColor: " #fff",
    },
    form: {
        display: "block",
        marginTop: "0em",
        padding: "0 1em 1em 1em",
    },
    button: {
        width: "100%",
        borderRadius: "100px",
        border: "none",
        padding: "16px 32px",
        textDecoration: "none",
        margin: "4px 2px",
        cursor: "pointer",
    },
    input: {
        width: "100%",
        margin: "8px 0",
        borderColor: "rgb(49,50,100)",
    },
    label: {
        color: "#3f51b5",
        fontSize: "20px",
    },
}));

const Login = () =>{
    const url= "http://localhost:8000/api/";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

const emailHandler = (e)=>{
    setEmail(e.target.value);
}
    const passwordHandler = (e)=>{
        setPassword(e.target.value);
}
    const login = ()=>{
    if(password !== "" && email !== "" ){
        const data = {
			password:password,
			email:email,
            type:"Admin"
		}
		axios.post(url + "login", data).then((response)=>{
            if(response.data !=  null && response.data.type == "Admin"){
            localStorage.setItem("loggedIn","True")
                localStorage.setItem("token",response.data.access_token);
                setRedirect(true);
			}
		});
    }
  }
    const classes = useStyles();
    if (redirect == true)
    return <Redirect to = "/customers" />
    return (
        <>
        <Card className={classes.main}>
            <AppBarCustom/>
            <CardContent className={classes.card}>
                <form
                      className={classes.form}
                >
                    <Box margin="1em" display="flex" justifyContent="center">
                        <Avatar>
                            <LockIcon />
                        </Avatar>
                    </Box>
                    <TextField
                        className={classes.input}
                        type="email"
                        name="email"
                        onChange={emailHandler}
                        label="Email"
                    />
                    <TextField
                        className={classes.input}
                        type="password"
                        name="password"
                        onChange={passwordHandler}
                        label="Password"
                    />
                </form>
                <Button
                    onClick={login}
                    fullWidth
                    variant="contained"
                    color="primary"
                    value="Verify"
                >
                    signIn
                </Button>
            </CardContent>
        </Card>
        </>
    );
}
export default Login;
