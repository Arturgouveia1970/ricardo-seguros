//import { Link } from 'react-router-dom';
// import { logo } from './assets/ricardo2.png'

function Header() {
  return (
    <div className="border-b-2 border-b-orange-300 bg-blue flex">
      <div className=" h-30 w-30">
        <img src={"/src/assets/ricardo2.png"} alt="logo"  />
      </div>
      <ul className="flex items-center gap-4 mx-auto text-orange ">
        <li className="">Sobre nós</li>
        <li>Servicos</li>
        <li>Contacto</li>
      </ul>
        
    </div>
    
  )
}

export default Header
