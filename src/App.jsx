import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer1'
import { Routes, Route } from 'react-router-dom'
// import Cuerpo_dos from './components/cuerpo_dos/Cuerpo_dos'
import Home from './views/home'
import Tables from './components/tables/Table'
// import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
   <div>
      
      <Header/>
      <Routes>
         <Route path='/'element={<Home/>}></Route>
         <Route path='/consultas'element={<Tables/>}></Route>
      </Routes>
      <Footer/>
   </div>
  )
}

export default App
