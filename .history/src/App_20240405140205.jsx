import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"; 
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      
      <Header /> 
      <Hero />
      <Footer />     
    </Router>
  )
}

export default App
