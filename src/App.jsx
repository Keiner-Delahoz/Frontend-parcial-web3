import './App.css'
// import NavBar from './components/navbar/NavBar'
import Carousel from './components/carousel/Carousel'
import Cuerpo_uno from './components/cuerpo_uno/Cuerpo_uno'
import Header from './components/header/Header'

function App() {

  return (
   <div className='containerfluid'>
      <Header/>
      {/* <NavBar/> */}
      <Carousel/>
      <Cuerpo_uno/>
   </div>
    
  )
}

export default App
