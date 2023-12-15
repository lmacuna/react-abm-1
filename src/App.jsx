import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom"
import ProtectedRoutes from './Utils/ProtectesRoutes'
import Login from './Components/Login/Login'
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import { useSelector } from 'react-redux'
import { Spinner } from 'reactstrap';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Page404, PageInicio } from './Components'
import Footer from './Components/Footer/Footer'




function App() {
  const navigate = useNavigate()


  const { user } = useSelector(state => state.user)
  const [spinner, setSpinner] = useState(null)

  const isLoading = () => {

    setSpinner(true)

  }



  if (user && spinner === null) {
    isLoading()
    setTimeout(() => {
      setSpinner(false)
      navigate('/')
    }, 5000);

  }

  return (
    <>
      {user && !spinner ? <><Header/><NavBar setSpinner={setSpinner} /> </> : null}
      {spinner ? <div style={{color:'orangered'}} className='w-100 p-4 d-flex justify-content-center fs-3'><Spinner className='m-5 t-5' variant="info" />Iniciando sesion...<Spinner className='m-5 t-5' variant="info" />  </div> : null}
      <Routes>

        <Route path='/react-abm-1/' element={!user ? <><Login /></> : null} />
        <Route element={<ProtectedRoutes canActivate={user} />}>
          <Route path='/' element={<PageInicio/>} />
          <Route path='/productos' element={<h1 style={{color:'white',width:'auto'}}>Productos</h1>} />
          <Route path='/contacto' element={<h1 style={{color:'white',width:'auto'}}>Contacto</h1>} />
        </Route>

       

      </Routes>
      {user && !spinner ? <><Footer/> </> : null}


    </>
  )
}

export default App
