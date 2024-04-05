//import { Link } from 'react-router-dom';
// import { logo } from './assets/ricardo2.png'

import { Link } from "react-router-dom"

function Header() {
  return (
    <div className=" bg-blue flex">
      <div className=" h-30 w-30">
        <img src={"/src/assets/ricardo2.png"} alt="logo"  />
      </div>
      <ul className="flex items-center gap-10 mx-auto text-orange ">
        <Link to="/sobre"><li className="hover:text-orangelight hover:underline">Sobre nós</li></Link>
        <Link to="/servicos"><li className="hover:text-orangelight hover:underline">Servicos</li></Link>
        <Link to="/"
      </ul>
        
    </div>
    
  )
}

export default Header
