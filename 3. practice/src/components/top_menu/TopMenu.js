import React, { useState } from 'react';
import './TopMenu.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/Cart';

const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Practice React</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link to='/products'>Products</Link>
            </NavItem>
            <NavItem>
              <CartContext.Consumer>
                {({ cartItems }) => (
                  <Link to='/product'>Cart ({cartItems.length})</Link>
                )}
              </CartContext.Consumer>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopMenu;
