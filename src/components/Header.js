import React from 'react'
import { Typography,Avatar,Grid,Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Typed from "react-typed"
import zeus from '../zeus.png';

//CSS STYLES
const useStyles = makeStyles(theme=> ({
    avatar: {
        width:theme.spacing(10),
        height:theme.spacing(10),
        margin:theme.spacing(1),
    },
    title: {
        color:"tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex:1
    }
}))
const Header = () => {
    const classes= useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={zeus} alt="Zeus"/>
            </Grid>
            <Typography className={classes.title} variant="h3">
                <Typed strings={["Are you a Covid suspect !!","Please take the test"]} 
                typeSpeed={60}
                backSpeed={60}
                loop/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Stay Home  Stay Safe","Avoid public gathering","Wear a mask"]}
                 typeSpeed={40}
                 backSpeed={60}
                 loop/>
            </Typography>
        </Box>
    )
}

export default Header

