import { Navbar } from 'flowbite-react';

function Header() {
  return (
    <Navbar fluid className="bg-blue">
      <Navbar.Brand href="/">
        <img src={"/src/assets/ricardoi2.png"} alt="logo"  />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-orange">Home</Navbar.Link>
        <Navbar.Link href="/sobre" className="text-orange">Sobre Nós</Navbar.Link>
        <Navbar.Link href="/servicos" className="text-orange">Serviços</Navbar.Link>
        <Navbar.Link href="/empresa" className="text-orange">Empresa</Navbar.Link>
        <Navbar.Link href="/contacto" className="text-orange">Contactos</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
