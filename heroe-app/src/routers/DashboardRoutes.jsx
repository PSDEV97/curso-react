import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/hero/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />
        <div className='container'>
          <Routes>
              <Route path='/dc' element={ <DcScreen/> } />
              <Route path='/marvel' element={ <MarvelScreen/> } />
              
              <Route path='/search' element={ <SearchScreen/> } />
              <Route path='/hero/:id' element={ <HeroScreen/> } />
              <Route path='/' element={ <MarvelScreen/> } />
          </Routes>
        </div>
    </>
  )
}
