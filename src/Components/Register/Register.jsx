import React, { useEffect, useState } from 'react';
import Styles from './EstiloRegister';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Navigate } from 'react-router-dom';
import { servicesRegister } from '../../Services/ServiceRegister';

const initialValues={
    email:'',
    confirmEmail:'',
    password:'',
    confirmPassword:''
}  

const validationSchema=Yup.object({
        email: Yup.string().email("Correo no valido").required("Campo requerido"),
        password: Yup.string().min(5,'Minimo 5 caracteres').max(30,'Maximo 30 caracteres').required("Campo requerido"),
        confirmEmail: Yup.string().oneOf([Yup.ref('email'),undefined],'El email no coinicide').required("Campo requerido"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'),undefined],'Las contrasenias no coinciden').required("Campo requerido")
})
const Register = ({setRegistrarse}) => {

   const [volver,setVolver]=useState(false)

   
  const onSubmit=(values)=>{
     
    console.log(values)
    var data;
         data=JSON.stringify(values)
         console.log(data)
         const envio=async()=>{
            var metodo='POST'
            var url=`https://app-express-1-lmacuna.vercel.app/register`
            var res=await servicesRegister(data,metodo,url)
              
               
            return (  setVolver(true),console.log(res))
            

        }
        
           envio() 
    
   
    
  }
    const {handleChange,errors,handleSubmit}=useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    console.log(errors)
   const volverLogin=()=>{
        setVolver(true)
        setRegistrarse(false)
   }
    useEffect(()=>{
        setVolver(false)
    },[])
    const classes=Styles()
    return ( 
       <>{!volver? <div className={classes.boxFormRegister}>
        
        <form className={classes.form} onSubmit={(e)=>handleSubmit(e)}><h5 style={{color:'rgb(145,145,145)'}}>Registrate</h5>
            <input autoFocus autoComplete='off' className={classes.input} type="text" name='email' placeholder='Escribe tu E-Mail' onChange={handleChange}/>
            <div style={{color:'red',height:'20px'}}>{errors?.email}</div>
            <input className={classes.input} type="text" name='confirmEmail' placeholder='Confirmar E-Mail' onChange={handleChange}/>
            <div style={{color:'red',height:'20px'}}>{errors?.confirmEmail}</div>
            <input className={classes.input} type="text" name='password' placeholder='Escribe tu Password' onChange={handleChange}/>
            <div style={{color:'red',height:'20px'}}>{errors?.password}</div>
            <input className={classes.input} type="text" name='confirmPassword' placeholder='Confirmar Password' onChange={handleChange}/>
            <div style={{color:'red',height:'20px'}}>{errors?.confirmPassword}</div>
            <input className={classes.btnLogin} type="submit" value="Registrarse"/>
            <button className={classes.btnVolverLogin} onClick={()=>volverLogin()}>Login</button>
        </form>
        
        </div>:<><Navigate to="/"/></>}
        </>
     );
}
 
export default Register;