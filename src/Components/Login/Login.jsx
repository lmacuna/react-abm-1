import React, { useState } from 'react';
import Styles from './EstiloLogin.js';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/users/index.js';
import Register from '../Register/Register.jsx';
import { Alert } from 'reactstrap';
import { Typography } from '@material-ui/core';
import { services } from '../../Services/ServicesLogin.js';

const initialValues = {
    user: '',
    password: '',

}

const validationSchema = Yup.object({
    user: Yup.string().min(5, 'Minimo 5 caracteres').max(30, 'Maximo 30 caracteres').required("Campo requerido"),
    password: Yup.string().min(5, 'Minimo 5 caracteres').max(30, 'Maximo 30 caracteres').required("Campo requerido"),

})
const Login = () => {


    const [registrarse, setRegistrarse] = useState(false)
    const [loginCorrecto, setLoginCorrecto] = useState(null)
    const dispatch = useDispatch()

    const onSubmit = (values) => {
         console.log(values)
        var data;
             data=JSON.stringify(values)
             console.log(data)
        const envio=async()=>{
            var metodo='POST'
            var url=`https://app-express-1-lmacuna.vercel.app/login`
            var res=await services(data,metodo,url)
              
           
             
            return (console.log(res), res.token? setTimeout(() => {
                dispatch(setUser(res.token))
            }, 6000) : console.log(res.data), res.token ? setLoginCorrecto(true) : setLoginCorrecto(false), resetLogin())
            
 
        }
        
           envio() 


       
    }

    const resetLogin = () => {
        setTimeout(() => {
            setLoginCorrecto(null)

        }, 5000);

    }

    const { handleChange, errors, handleSubmit } = useFormik({
        initialValues,
        onSubmit,
        validationSchema

    })

    console.log(errors)

    const Registrate = () => {
        setRegistrarse(true)
    }

    const classes = Styles()
    return (
        <>

            {!registrarse ? <div className={classes.boxForm}>
                <form autoComplete='off' className={classes.form} onSubmit={handleSubmit }><h5 style={{ color: 'rgb(145,145,145)' }}>Login user:lucas pass: 12345</h5>
                    <input autoFocus className={classes.input} type="text" name='user' placeholder='Usuario o correo electronico' onChange={handleChange} />
                    <div style={{ color: 'red', height: '20px' }}>{errors?.user}</div>
                    <input className={classes.input} type="text" name='password' placeholder='Password' onChange={handleChange} />
                    <div style={{ color: 'red', height: '20px' }}>{errors?.password}</div>
                    <input className={classes.btnLogin} type="submit" value="SIGN IN" />
                    <div style={{
                        width: '100%', padding: '8px', display: 'flex',
                        justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '30px'
                    }}>

                        <span style={{ color: 'orange', fontWeight: 'bold', margin: 'auto', fontSize: '16px' }}>No estas registrado?</span>
                        <span className={classes.btnRegistrate} onClick={() => Registrate()}>Registrate</span>
                    </div>
                </form>

            </div>

                :
                <Register setRegistrarse={setRegistrarse} />}
            {loginCorrecto && loginCorrecto !== null ? <Alert style={{ background: 'rgb(0,100,0, 0.5)',margin:'auto',alignItems:'center' }} className='d-flex justify-content-center w-75  text-light'>

                <Typography paragraph>
                    Login correcto
                </Typography>
            </Alert> : null}
            {!loginCorrecto && loginCorrecto !== null ? <Alert style={{ background: 'crimson',margin:'auto',height:'100px',alignItems:'center'}} className='d-flex justify-content-center w-75  text-light'>

                <Typography paragraph>
                    Login incorrecto
                </Typography>
            </Alert> : null}
        </>
    );
}

export default Login;
