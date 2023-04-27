import moment from "moment/moment";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className=" mt-3">
      <Container>
        <div className="text-center">
          <img src={logo} alt="" />
          <h6 className="text-secondary">Journalism Without Fear or Favour</h6>
          <p>{moment().format(`dddd, MMMM D, YYYY`)}</p>
        </div>
        <div className="d-flex latest gap-2">
          <Button variant="danger">Latest</Button>

          <Marquee className="text-danger text-lg" pauseOnHover>
            <h5>Match Highlights: Germany vs Spain — as it happened ! </h5>
          </Marquee>
        </div>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link>
                <Link to={"/"}>Home</Link>
              </Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav className="flex">
              <Nav.Link href="#deets">
                {user && <FaUserCircle style={{ fontSize: "2rem" }} />}
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
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
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
