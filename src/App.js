 import {useState} from 'react'
//import Student from './Student'
//import CarsDetails from './CarDetails'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App(){
  
  return(
    <div>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>

    </Routes>
    </BrowserRouter>
    </div>
    
  )
}
export default App