import React from 'react';
import { useState } from 'react';
import { Container,LogoContainer,Wraper,Menu, MenuItem, MenuItemLink, MobileIcon } from './NavbarElements';
import { IconContext } from 'react-icons';

import {
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaRegSmile,
} from 'react-icons/fa';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <Container id='Seccion1'>
        <Wraper>
          <IconContext.Provider value = {{style: {fontSize:"2em"}}}>
            <LogoContainer>
             <p>SpeedWeb</p>
              <p>Paginas Web</p>
            </LogoContainer>
              <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
              </MobileIcon>
            <Menu open={showMobileMenu}>
              <MenuItem>
              <MenuItemLink  onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <div>
              <FaHome />
              <button>
              <a href='#Seccion1'>HOME</a>
              </button>
              </div>
              </MenuItemLink>
              </MenuItem> 
              <MenuItem>
              <MenuItemLink  onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <div>
              <FaUserAlt />
              <button>
              <a href='#Seccion2'>NOSOTROS</a>
              </button>
              </div>
              </MenuItemLink>
              </MenuItem> 
              <MenuItem>
              <MenuItemLink  onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <div>
              <FaBriefcase /> 
              <button>
              < a href='#Seccion3'>PROYECTOS</a>
              </button>
              </div>
              </MenuItemLink>
              </MenuItem> 
              <MenuItem>
              <MenuItemLink  onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <div>
              <FaRegSmile />
              <button>
              <a href='#Seccion4'>CONTACTO</a>
              </button>
              </div>
              </MenuItemLink>
              </MenuItem> 
            </Menu>
            </IconContext.Provider>
        </Wraper>
    </Container>
  )
}


export default Navbar
