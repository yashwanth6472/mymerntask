import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './Components/Home'
import Register from './Components/Register'
import SignIn from './Components/SignIn'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/user/signIn' element={<SignIn></SignIn>}></Route>
          <Route exact path='/user/Register' element={<Register></Register>}></Route>
          <Route path='/home/:email' element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App