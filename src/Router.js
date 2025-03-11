import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Event from './components/event'

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/event' element={<Event/>}></Route>
      </Routes>
    </div>
  )
}
