import { Navbar, Dropdown } from 'flowbite-react';

function Header() {
  return (
    <Navbar fluid className="bg-blue text-orange">
      <Navbar.Brand href="/">
        <img src={"/src/assets/ricardo2.png"} alt="logo"  />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-orange">Home</Navbar.Link>
        <Navbar.Link href="/sobre" className="text-orange">Sobre Nós</Navbar.Link>
        <Dropdown
          arrowIcon={true}
          inline
          label={"Serviços"}
         >
            <Dropdown.Item>Casa</Dropdown.Item>
            <Dropdown.Item>Saúde</Dropdown.Item>
            <Dropdown.Item>Automóvel</Dropdown.Item>
        </Dropdown> 
        {/* <Navbar.Link href="/servicos" className="text-orange">Serviços</Navbar.Link> */}
        <Navbar.Link href="/empresa" className="text-orange">Empresa</Navbar.Link>
        <Navbar.Link href="/contacto" className="text-orange">Contactos</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
