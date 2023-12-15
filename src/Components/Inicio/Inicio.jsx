import { Typography, Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'reactstrap';
import { setAlerta } from '../../store/slices/alertInicio';


const Inicio = () => {

  const { alerta } = useSelector(state => state.alerta)

  const dispatch = useDispatch()

  const establecerAlerta = () => {
    setTimeout(() => {
      dispatch(setAlerta("habilitado"))

    }, 6000);
  }
  useEffect(() => {
    !alerta ? establecerAlerta() : null
  }, [])
  return (
    <Container className='d-flex w-100 justify-content-center'>

      {!alerta ? <Alert style={{ background: 'rgb(0,100,0, 0.5)' }} className='d-flex justify-content-center w-75  text-light'>
        <Typography variant='h6'>Bienvenido a Mi web</Typography>
      </Alert> : null}
      {alerta ? <>
        <Container style={{ color: 'white', background: 'rgb(0,0,0,0.5)' ,padding:'15px',marginBottom:'50px',borderRadius:'20px'}}>
          <Typography variant='h6'>
            React js en Front - End
          </Typography>
          <Typography paragraph>
            En esta web hemos puesto en practica algunos conceptos básicos
            de login, estado global, rutas protegidas y control de formulario.
            Con el administrador de paquetes NPM se instaló algunas depedencias
            para lograr la funcionalidad y aspecto de la aplicacion.
          </Typography>
          <Typography variant='h6'>
            Dependencias:
          </Typography>

          <Typography paragraph className='d-flex justify-content-center p-1 w-75'>
            "@material-ui/core": "^4.12.4",
            "@mui/styles": "^5.14.20",
            "@reduxjs/toolkit": "^2.0.1",
            "bootstrap": "^5.3.2",
            "formik": "^2.4.5",
            "react-dom": "^18.2.0",
            "react-icons": "^4.12.0",
            "react-redux": "^9.0.2",
            "react-router-dom": "^6.20.1",
            "react-use": "^17.4.2",
            "reactstrap": "^9.2.1",
            "sweetalert2": "^11.10.1",
            "yup": "^1.3.2"
          </Typography>


          <Typography variant='h6'>
           Express js Back - End
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Deleniti suscipit eum ea quaerat modi cum itaque architecto,
            nesciunt quas totam reiciendis magni odit velit dicta rerum
            minus assumenda doloremque ut placeat laborum nam alias
            nihil! Aliquam aspernatur minima at quas, aperiam qui
            atque ducimus in architecto voluptate ad, iste cum quae
            amet impedit perferendis, quia ut sit repudiandae accusamus
            aut? Debitis asperiores veniam quibusdam nesciunt ad perferendis
            consequuntur quia fugiat aliquam corporis reprehenderit in aspernatur
            aperiam facilis, incidunt commodi eligendi est rerum sit dolorem aut
            harum id earum. Et fuga ut a officia possimus saepe earum consequatur
            aspernatur est iste dolorem cupiditate veritatis ducimus tempore
            provident beatae, accusamus esse deserunt, vero dignissimos
            perferendis, velit aut. Facilis eligendi quidem repudiandae maiores
            voluptatem suscipit corrupti odit, laboriosam qui sequi adipisci
            reiciendis sed sit vel laborum illo. Odit nam itaque tenetur error
            porro optio minus, aperiam aut quisquam officiis iste sapiente
            earum ut, doloribus placeat eligendi facere cumque incidunt
            eius modi aliquid neque pariatur commodi. Nulla est neque delectus
            possimus perspiciatis rem alias recusandae ullam magnam omnis
            rerum distinctio minus dolorum quisquam consectetur, ratione
            dolor cumque necessitatibus, voluptate pariatur corporis velit
            facere voluptatum? Magnam, aspernatur fugit saepe molestiae ea
            voluptatibus, tenetur ex aliquid doloremque minima recusandae
            repellendus natus. Eos nemo magni earum ullam laudantium, dolorum
            libero, vel quaerat id saepe adipisci velit est hic. A laborum
            praesentium ex ipsam quia commodi corrupti possimus enim quidem,
            nostrum nam consequatur repellendus distinctio aperiam sapiente
            expedita est animi illo quis eveniet eaque. Earum non rem voluptatem,
            quam, adipisci dolorem nobis explicabo aspernatur libero pariatur
            impedit repellat quisquam hic iure voluptates autem nihil, fugiat
            quo distinctio eos sapiente eligendi aut! Quisquam iste distinctio
            sequi amet. Doloremque laboriosam eaque magnam incidunt quis ea
            eius, modi consectetur non, harum praesentium, inventore autem
            laudantium in neque soluta dicta commodi enim voluptates maiores
            obcaecati! Earum doloribus dignissimos velit! Voluptatibus
            saepe accusantium iste error quaerat assumenda laboriosam,
            sed, temporibus similique distinctio eius, ipsum magni
            debitis cumque officia omnis architecto nobis enim ipsam!
          </Typography>


        </Container>
      </> : null}
    </Container>
  )
}


export default Inicio;