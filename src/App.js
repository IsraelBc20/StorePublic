import React from 'react'
// import PortadaView from "./views/PortadaView"
import { Switch, BrowserRouter as Router } from "react-router-dom"
import NavTop from "./components/NavTop"
import Routes from "./Routes"
import CarritoContextProvider from "./context/carritoContext"

function App() {
  return (
    <div>
      <Router>
        <CarritoContextProvider>
          <NavTop/>
          <Switch>
            <Routes/>
          </Switch>
        </CarritoContextProvider>
      </Router>
    </div>
  )
}

export default App

