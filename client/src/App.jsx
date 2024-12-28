import { useState } from 'react'
import HomePage from "./pages/HomePage.jsx"
import {Routes, Route } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import NotFound from "./pages/NotFound.jsx"
import {ToastContainer} from "react-toastify"
import PrivateRoute from './components/routes/PrivateRoute.jsx'
import PublicRoute from './components/routes/PublicRoute.jsx'

function App() {

  return (
    <>
    {" "}
    <ToastContainer/>
     <Routes>
      <Route path='/' element= {
        <PublicRoute>
        <HomePage/>
        </PublicRoute>
        }/>
      <Route path='/login' element= {
        <PublicRoute>
        <Login/>
        </PublicRoute>
        }/>
      <Route path='/register' element= {
        <PublicRoute>
        <Register/>
        </PublicRoute>
        }/>
      <Route path='/dashboard' element= {
        <PrivateRoute>
          <Dashboard/>
        </PrivateRoute>
      }/>
      <Route path='*' element= {<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App
