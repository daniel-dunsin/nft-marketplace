import React, { useState } from "react";
import styled from "styled-components";
import { Fa500Px, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import Button from "../Button";
import Container from "../Container";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <NavbarContainer>
      <Container>
        <div className="navbar-brand" onClick={()=>{setIsSidebarOpen(true)}}>
          <div className="img-container">
            <img src={logo} alt="logo" />
          </div>
          <span
            onClick={() => {
              setIsSidebarOpen(true);
            }}
          >
            <FaBars />
          </span>
        </div>
        <ul
          className={`links-container ${isSidebarOpen ? "open-sidebar" : ""}`}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Sellers</a>
          </li>
          <li>
            <a href="#">Create</a>
          </li>
          <span
            onClick={() => {
              setIsSidebarOpen(false);
            }}
          >
            <FaTimes />
          </span>
        </ul>
        <Button>Contact</Button>
      </Container>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    position: relative;
  }
  .navbar-brand {
    span {
      display: none;
    }
  }
  .links-container {
    background-color: white;
    padding: 3rem 7rem;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    span {
      display: none;
    }
    li {
      display: inline-block;
      list-style: none;
      margin: 0 1.5rem;
      a {
        color: black;
        text-decoration: none;
        transition: 0.3s;
        &:hover {
          color: ${({ theme }) => theme.colors.mainLightBlue};
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.tablet}) {
    & > div {
      padding: 2rem;

      .links-container {
        clip-path: none;
        padding: 0rem;
        background-color: transparent;
        li {
          a {
            color: white;
          }
        }
      }
      button {
        display: none;
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.mobile}) {
    & > div {
      display: block;
      padding: 0;
      .navbar-brand {
        padding: 2rem;
        position: relative;
        span {
          display: block;
          color: white;
          font-size: 2.7rem;
          top: 3rem;
          right: 3rem;
          position: absolute;
        }
      }
      .links-container {
        position: fixed;
        top: 0;
        left: 0;
        background-color: white;
        z-index: 2;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        flex-direction: column;
        transform: translateX(100%);
        transition: 0.5s;
        &.open-sidebar {
          transform: translateX(0) !important;
        }
        span {
          display: block;
          font-size: 2.7rem;
          position: absolute;
          top: 3rem;
          right: 4rem;
          color: darkred;
        }
        li {
          display: block;
          font-size: 3rem;
          font-family: cursive !important;
          a {
            color: black;
          }
        }
      }
    }
  }
`;

export default Navbar;
