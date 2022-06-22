import React, { useState } from "react";
import {auth} from "../../firebaseConfig/FirebaseConfig";
import {useNavigate} from "react-router-dom";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Navbar.elements";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import logo1 from "../../img/logo1.png"

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const singOutClick = () => {auth.signOut();navigate("/");}
  
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <img alt="" src={logo1} />
          </LogoContainer>
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={() => navigate("/Products")}>
                <div>
                  <FaHome />
                  Menu
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>  
              <MenuItemLink onClick={() => navigate("/Register")}>
                <div>
                  <FaBriefcase />
                  Crear usuario
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => navigate("/AddProducts")}>
                <div>
                  <FaGlasses />
                  Agregar productos
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => singOutClick()}>
                <div>
                  <FaUserAlt />
                  Cerrar sesión
                </div>

              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

