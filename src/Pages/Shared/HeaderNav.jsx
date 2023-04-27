import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import ActiveLink from "./ActiveLink";

const HeaderNav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
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
            {user && user.photoURL ? (
              <>
                <Image
                  src={user.photoURL}
                  style={{ height: "2rem", width: "2rem" }}
                  roundedCircle
                />{" "}
                <p>{user.displayName}</p>
              </>
            ) : (
              <FaUserCircle style={{ fontSize: "2rem" }} />
            )}

            {user ? (
              <Button variant="dark" className="px-4" onClick={handleLogOut}>
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
