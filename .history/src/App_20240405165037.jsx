import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"; 
import Footer from './components/Footer';
import Header from './components/Header';
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
// import Servicos from "./pages/Servicos";
import Contacto from "./pages/Contacto";
import Empresa from "./pages/Empresa";
import Casa from "./pages/Casa";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/casa" element={<Casa />} />
          <Route path="/" element={<Casa />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer /> 
      </div>          
    </Router>
  )
}

export default App
