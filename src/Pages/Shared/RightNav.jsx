import React from "react";
import { Button } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightNav = () => {
  return (
    <div>
      <h5>Login With</h5>
      <Button variant="outline-primary" className="w-100 mb-3">
        <FaGoogle className="me-1" /> Login With Google
      </Button>
      <Button variant="outline-secondary" className="w-100">
        <FaGithub className="me-1" />
        Login With GitHub
      </Button>
    </div>
  );
};

export default RightNav;
