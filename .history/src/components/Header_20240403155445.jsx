//import { Link } from 'react-router-dom';
// import { logo } from './assets/ricardo2.png'

function Header() {
  return (
    <div className="border-b-2 border-b-orange-500 bg-blend- ">
      <div>
        <img src={"/src/assets/ricardo2.png"} alt="logo" className="h-20 w-20" />
      </div>
      <ul>
        <li>sobre nós</li>
        <li>Servicos</li>
        <li>Contacto</li>
      </ul>
        
    </div>
    
  )
}

export default Header
