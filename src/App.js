import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'


let logoutTimer;
const App = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Router>
        <Navbar />
        <div style={{ marginTop: '80px' }}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={
              <Login />
            } />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App