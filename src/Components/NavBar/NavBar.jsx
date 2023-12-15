import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/users';
import Styles from './EstilosNavBar';
import { setAlerta } from '../../store/slices/alertInicio';
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar=({setSpinner})=>{
    const [estiloNav,setEstiloNav]=useState("")
  

    const dispatch=useDispatch()

    const cerrarSesion=()=>{
        //setUsuario(null)
        dispatch(setAlerta(''))
        dispatch(setUser(''))
         
        localStorage.removeItem("usuario")
        setSpinner(null)
    }

const navBar=()=>{
    if(estiloNav===classes.navClose){
        setEstiloNav(classes.navOpen)
    }else{
        setEstiloNav(classes.navClose)
    }
}

useEffect(()=>{
     setEstiloNav(classes.navClose)
},[])
    const classes=Styles()
    return(<>
    <label  htmlFor="check" className='check' ><GiHamburgerMenu id='icono' className="hamburguesa" /></label>
           <input type='checkbox' id='check'onClick={()=>navBar()}></input>
        <nav className={estiloNav} >
            
            <Link className={classes.link} onClick={()=>navBar()} to="/">Inicio</Link>
            <Link className={classes.link} onClick={()=>navBar()}  to="/productos">Productos</Link>
            <Link className={classes.link} onClick={()=>navBar()}  to="/contacto">Contacto</Link>
            <Link className={classes.btnSesion} onClick={()=>cerrarSesion()}>Logout</Link>
        </nav>
        </>
    )
}


export default NavBar;