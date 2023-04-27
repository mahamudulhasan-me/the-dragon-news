import moment from "moment/moment";
import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../provider/AuthProvider";
import HeaderNav from "./HeaderNav";

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
        <HeaderNav></HeaderNav>
      </Container>
    </header>
  );
};

export default Header;
