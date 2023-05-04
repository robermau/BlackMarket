import {Routes,Route} from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import PageProductos from './components/pageProductos';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){

    return (
      <>
      <NavbarComponent/>
      <Routes>
      <Route path="/" element={<PageProductos/>} />
    </Routes>        
    </>
    
    )
}

export default App;