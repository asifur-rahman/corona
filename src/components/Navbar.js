import React,{useState} from 'react'
import {Link} from "react-router-dom"
import zeus from '../zeus.png'
import {makeStyles} from '@material-ui/core/styles';
import MobileRightMenuSlider from "@material-ui/core/Drawer"
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
Avatar,
Divider,
List,
Typography,
Box,
ListItemIcon
} from "@material-ui/core";
import{
ArrowBack,
Home,
Apps,
ContactMail,
ImportContacts
} from "@material-ui/icons"
//Css styles 

const useStyles= makeStyles(theme=>({
    menuSliderContainer:{
        width:250,
        background:"#511",
        height: "100%"

    },
    avatar:{
        display:"block",
        margin:"0.5rem auto",
        width: theme.spacing(10),
        height: theme.spacing(10)
    },
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <Apps/>,
        listText: "Test",
        listPath: "/form"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contacts"
    },
    {
        listIcon: <ImportContacts/>,
        listText: "Admin",
        listPath: "/admin"
    },
   
]

const Navbar = () => {
    const [state,setState]= useState({
        right:false
    })
    const toggleSlider= (slider,open)=> ()=>{
        setState({...state,[slider]:open})
    }
    const classes =  useStyles();
    const sideList = slider=>(
        <Box className={classes.menuSliderContainer}
        component="div"
        onClick={toggleSlider(slider,false)}
        >
        <Avatar className={classes.avatar} src={zeus} alt="Zeus"/>
        <Divider/>
        <List>
            {menuItems.map((lsItem,key)=>(
                 <ListItem button key={key} component={Link} to ={lsItem.listPath}>
                 <ListItemIcon  style={{color:"tan"}}>{lsItem.listIcon} </ListItemIcon>
                 <ListItemText  style={{color:"tan"}} primary={lsItem.listText}/>
                 </ListItem>
            ))}
           
            
        </List>
        </Box>
    )
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background:"#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)}>
                       <ArrowBack style={{color:"tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:"tan"}}>
                        Menu
                    </Typography>
                    <MobileRightMenuSlider
                        anchor="right"
                        open={state.right}
                        onClose={toggleSlider("right",false)}>
                            {sideList("right")}
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
