import React from 'react';
import Inicio from '../../Components/Inicio/Inicio';
import  { Typography } from "@material-ui/core"



const PageInicio=()=>{



    return(
        <>
        <Typography variant='h4' style={{color:'white'}}>
                      Inicio
        </Typography>
         <Inicio/>
        </>
    )
}


export default PageInicio;