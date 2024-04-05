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
import Servicos from "./pages/Servicos";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer /> 
      </div>          
    </Router>
  )
}

export default App
