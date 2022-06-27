import React from 'react'
import {auth} from "../../firebaseConfig/FirebaseConfig";
import {useNavigate} from "react-router-dom";
import logo1 from "../../img/logo1.png"

export const Navbar = () => {
    const navigate = useNavigate();
  const singOutClick = () => {auth.signOut();navigate("/");}
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <img alt="" src={logo1} width="15%"/>
    {/* <a className="navbar-brand" href={() => navigate("/P")}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active  mr-2" aria-current="page" href='/Products'>Menú</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active ms-5" aria-current="page" href="/AddProducts">Agregar productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-5" aria-current="page" href="/Register">Crear usuarios</a>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-warning ms-5" type="submit" onClick={() => singOutClick()}>Cerrar Sesión</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar;

// import React, { useState } from "react";
// import {auth} from "../../firebaseConfig/FirebaseConfig";
// import {useNavigate} from "react-router-dom";
// import {
//   Container,
//   LogoContainer,
//   Wrapper,
//   Menu,
//   MenuItem,
//   MenuItemLink,
//   MobileIcon,
// } from "./Navbar.elements";
// import {
//   FaBars,
//   FaTimes,
//   FaHome,
//   FaUserAlt,
//   FaBriefcase,
//   FaGlasses,
// } from "react-icons/fa";
// import { IconContext } from "react-icons";
// import logo1 from "../../img/logo1.png"

// const Navbar = () => {
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const navigate = useNavigate();
//   const singOutClick = () => {auth.signOut();navigate("/");}
  
//   return (
//     <Container>
//       <Wrapper>
//         <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
//           <LogoContainer>
//             <img alt="" src={logo1} />
//           </LogoContainer>
//           <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
//             {showMobileMenu ? <FaTimes /> : <FaBars />}
//           </MobileIcon>

//           <Menu open={showMobileMenu}>
//             <MenuItem>
//               <MenuItemLink onClick={() => navigate("/Products")}>
//                 <div>
//                   <FaHome />
//                   Menu
//                 </div>
//               </MenuItemLink>
//             </MenuItem>
//             <MenuItem>  
//               <MenuItemLink onClick={() => navigate("/Register")}>
//                 <div>
//                   <FaBriefcase />
//                   Crear usuario
//                 </div>
//               </MenuItemLink>
//             </MenuItem>
//             <MenuItem>
//               <MenuItemLink onClick={() => navigate("/AddProducts")}>
//                 <div>
//                   <FaGlasses />
//                   Agregar productos
//                 </div>
//               </MenuItemLink>
//             </MenuItem>
//             <MenuItem>
//               <MenuItemLink onClick={() => singOutClick()}>
//                 <div>
//                   <FaUserAlt />
//                   Cerrar sesión
//                 </div>

//               </MenuItemLink>
//             </MenuItem>
//           </Menu>
//         </IconContext.Provider>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Navbar;

