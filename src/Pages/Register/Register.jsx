import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [passError, setPassError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [acceptCond, setAcceptCond] = useState(false);

  const { createNewUser, updateUserProfile } = useContext(AuthContext);
  const handleCondition = (e) => {
    const isChecked = e.target.checked;
    setAcceptCond(isChecked);
  };
  const getEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const navigate = useNavigate();
  const handleRegisterUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;

    createNewUser(email, password)
      .then((credential) => {
        const user = credential.user;
        e.target.reset();
        navigate("/");
        updateUserProfile(user, name, photoUrl);
      })
      .catch((error) => setPassError(error.message));
  };
  const getPassword = (e) => {
    const password = e.target.value;
    setPassError("");
    if (password.length < 8) {
      setPassError("Minimum password length is 8 characters");
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      setPassError("At least one upper case");
    } else if (!/(?=.*?[a-z])/.test(password)) {
      setPassError("At least one lower case");
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setPassError("At least one digit");
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setPassError("At least one special character");
    } else {
      setPassword(password);
    }
  };

  return (
    <Container className="mx-auto w-25">
      <h3>Register Here</h3>
      <Form onSubmit={handleRegisterUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            type="text"
            name="photoUrl"
            placeholder="Paste your code"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            value={email}
            onChange={getEmail}
            placeholder="Enter your email address"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            value={password}
            onChange={getPassword}
            type={showPass ? "text" : "password"}
            placeholder="Password"
          />
          <p onClick={() => setShowPass(!showPass)}>
            {showPass ? "Hide" : "Show"} Password
          </p>
          <p className="text-danger">{passError}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onChange={handleCondition}
            label="Accept terms & conditions"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="w-100"
          disabled={acceptCond}
        >
          Register
        </Button>
        <p className="mt-2 text-center">
          Already Have An Account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
