import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {Button, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";

const useStyles = makeStyles((theme) => ({
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
export const CustomerAppBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Button component={Link} to="/dashboard" color="inherit" className={classes.hover}>Dashboard</Button>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                </Typography>
                <Button component={Link} to="/login" color="inherit" className={classes.hover}>Logout</Button>
            </Toolbar>
        </AppBar>
    )
}
