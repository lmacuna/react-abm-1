import React from 'react';
import Styles from './EstilosFooter';


const Footer = () => {



    const classes=Styles()
    return ( 
        <footer className={classes.footer}>
            <a className={classes.linkFooter} href="https://demo-carro-compras.vercel.app/" target='__blank'>Carrito de compras js</a>
            <a className={classes.linkFooter} href="https://lmacuna.github.io/calculadora-react-js-codesanbox/" target='__blank'>Calculadora react js</a>
            <a className={classes.linkFooter} href="https://app-node-example-1.vercel.app/" target='__blank'>App Node js</a>
            <a className={classes.linkFooter} href="https://lmacuna.github.io/INTRO-INTEGRADOR-FRONT-END-CODO-A-CODO/" target='__blank'>Front End vanilla</a>
        </footer>
     );
}
 
export default Footer;