//import { Link } from 'react-router-dom';
// import { logo } from './assets/ricardo2.png'

import { Link } from "react-router-dom";
import { Navbar } from 'flowbite-react';

function Header() {
  return (
    <Navbar fluid className="bg-blue">
      <Navbar.Brand href="/">
        <img src={"/src/assets/ricardo2.png"} alt="logo"  />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-orange">
          Home
        </Navbar.Link>
        <Navbar.Link href="/sobre" className="text-orange">
          Sobre Nós
        </Navbar.Link>
        <Navbar.Link href="/servicos" className="text-orange">Serviços</Navbar.Link>
        <Navbar.Link href="/empresa" className="text-orange">Empresa</Navbar.Link>
        <Navbar.Link href="/contacto" className="text-orange">Contactos</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    // <div className=" bg-blue flex">
    //   <Link to="/">
    //     <div className=" h-30 w-30">
    //       <img src={"/src/assets/ricardo2.png"} alt="logo"  />
    //     </div>
    //   </Link>
      
    //   <ul className="flex items-center gap-10 mx-auto text-orange ">
    //     <Link to="/sobre"><li className="hover:text-orangelight hover:underline">Sobre nós</li></Link>
    //     <Link to="/servicos"><li className="hover:text-orangelight hover:underline">Servicos</li></Link>
    //     <Link to="/empresa"><li className="hover:text-orangelight hover:underline">Empresa</li></Link>
    //     <Link to="/contacto"><li className="hover:text-orangelight hover:underline">Contacto</li></Link>
    //   </ul>        
    // </div>    
  )
}

export default Header
