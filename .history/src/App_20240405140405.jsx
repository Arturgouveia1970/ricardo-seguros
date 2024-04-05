import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"; 
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Home />
        </Routes>
        <Footer /> 
      </div>
       
      
          
    </Router>
  )
}

export default App
