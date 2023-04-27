import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const HeaderNav = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to={"/"}>Home</Link>

            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
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
