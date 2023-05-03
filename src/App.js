import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import AcercaDe from './Pages/AcercaDe'
import Contacto from './Pages/Contacto'


function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route path='/Acerca de' element={<AcercaDe/>}/>
       <Route path='Contacto' element={<Contacto/>}/>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App;
