import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';
import {Link} from "react-router-dom"

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="/">React App</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to="/saveproduct">Ürün Ekle</Link></NavLink>
            </NavItem>
            <CartSummary />
          </Nav>
          <NavbarText>Yan Menu</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;