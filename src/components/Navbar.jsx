import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import Wrapper from "../assets/wrappers/Navbar";

// const StyledBtn = styled.button`
//   background: red;
//   color: white;
//   font-size: 2rem;
//   padding: 1rem;
// `;

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        {/* <StyledBtn>Click kar</StyledBtn> */}
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" activeclassname="active">
            About
          </NavLink>
          <NavLink
            to="/newsletter"
            className="nav-link"
            activeclassname="active"
          >
            NewsLetter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
