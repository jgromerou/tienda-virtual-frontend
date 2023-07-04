import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/common/Footer';
import NavbarMenu from './components/common/NavbarMenu';
import Inicio from './components/views/Inicio';
import Detalles from './components/views/detalles';

function App() {
  return (
    <>
      <NavbarMenu></NavbarMenu>
      {/* <Inicio></Inicio> */}
      <Detalles></Detalles>
      <Footer></Footer>
    </>
  );
}

export default App;
