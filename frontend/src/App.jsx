import { useState } from "react"
import './app.css'
import Header from "./components/Header"
import Footer from './components/Footer'
import { Outlet } from "react-router-dom"

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContextProvider from "./context/AuthContextProvider"
function App() {
  return (
    <>
     <AuthContextProvider>
     <Header/>
     <ToastContainer theme="dark" autoClose="3000" closeOnClick pauseOnHover={false} />
     <Outlet />
     <Footer />
     </AuthContextProvider>
    </>
  )
}

export default App
