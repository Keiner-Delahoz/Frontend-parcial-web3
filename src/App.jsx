import './App.css'
// import NavBar from './components/navbar/NavBar'
import Carousel from './components/carousel/Carousel'
import Cuerpo_uno from './components/cuerpo_uno/Cuerpo_uno'
import Cuerpo_dos from './components/cuerpo_dos/Cuerpo_dos'
import Cuerpo_tres from './components/cuerpo_tres/Cuerpo_tres'
import Cuerpo_cuatro from './components/cuerpo_cuatro/Cuerpo_cuatro'
import Header from './components/header/Header'

function App() {

  return (
   <div className='App containerfluid'>
      <Header/>
      {/* <NavBar/> */}
      <Carousel/>
      <Cuerpo_uno/>
      <Cuerpo_dos/>
      <Cuerpo_tres/>
      <Cuerpo_cuatro/>
   </div>
    
  )
}

export default App
