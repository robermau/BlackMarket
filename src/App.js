import { browserRouter, Route, Routers} from 'react-router-dom'
import Home from './Pages/Home'
import AcercaDe from './Pages/AcercaDe'
import Contacto from './Pages/Contacto'
import Navbar from './Components/NavBar'

function App() {
  return (
    <browserRouter>
    <Navbar/>
    <Routers>
       <Route exact path='/' element={<Home/>}/>
       <Route path='/Acerca de' element={<AcercaDe/>}/>
       <Route path='Contacto' element={<Contacto/>}/>
    </Routers>
    </browserRouter>
      
  );
}

export default App;
