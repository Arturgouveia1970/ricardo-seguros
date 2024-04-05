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

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer /> 
      </div>          
    </Router>
  )
}

export default App
