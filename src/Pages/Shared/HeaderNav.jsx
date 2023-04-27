import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import ActiveLink from "./ActiveLink";

const HeaderNav = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <ActiveLink to="/category/0">Home</ActiveLink>
            <ActiveLink to="/">About</ActiveLink>
            <ActiveLink to="/">Career</ActiveLink>
          </Nav>
          <Nav className="flex">
            <Nav.Link href="#deets">
              {user && <FaUserCircle style={{ fontSize: "2rem" }} />}
            </Nav.Link>

            {user ? (
              <Button variant="dark" className="px-4">
                Logout
              </Button>
            ) : (
              <Link to={"/login"}>
                <Button variant="dark" className="px-4">
                  Login
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default HeaderNav;
