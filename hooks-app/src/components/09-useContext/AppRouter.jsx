import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { NavBar } from './NavBar'

export const AppRouter = () => {
  return (
    <div>
        <NavBar/>
        <div className='container'>
          <Routes>
              <Route exact path='/' element={ <HomeScreen/> }/>
              <Route exact path='/login' element={ <LoginScreen/> }/>        
              <Route exact path='/about' element={ <AboutScreen/> }/>
              <Route path='*' element={ <Navigate replace to='/' /> }/>
          </Routes>
        </div>
    </div>
  )
}
