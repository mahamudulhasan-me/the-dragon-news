import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { logInWithEmailAndPassword } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const path = location?.state?.pathname;
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logInWithEmailAndPassword(email, password)
      .then((credential) => {
        const user = credential.user;
        e.target.reset();
        navigate(path);
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container className="mx-auto w-25">
      <h3>Please Login</h3>
      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type={showPass ? "text" : "password"}
            placeholder="Password"
          />
          <p onClick={() => setShowPass(!showPass)}>
            {showPass ? "Hide" : "Show"}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
        <p className="mt-2 text-center">
          Dont Have An Account? <Link to="/register">Register</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
