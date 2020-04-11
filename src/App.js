import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import './App.css'
import routes from './routes'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        { routes }
      </Router>
    </div>
  )
}

export default App
