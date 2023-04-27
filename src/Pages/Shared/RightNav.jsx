import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import QZone from "./QZone";

const RightNav = () => {
  const { user, signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div>
        {!user && (
          <>
            <h5>Login With</h5>
            <Button
              variant="outline-primary"
              className="w-100 mb-3"
              onClick={handleGoogleSignIn}
            >
              <FaGoogle className="me-1" /> Login With Google
            </Button>
            <Button variant="outline-secondary" className="w-100">
              <FaGithub className="me-1" />
              Login With GitHub
            </Button>
          </>
        )}
      </div>
      <div className="mt-5">
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF className="socialIcon" style={{ color: "#3B599C" }} />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="socialIcon" style={{ color: "#58A7DE" }} />{" "}
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram
              className="socialIcon"
              style={{
                color: "purple",
              }}
            />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div className="amazing-add">
        <h3>Create an Amazing Newspaper</h3>
        <p style={{ fontWeight: "300", marginTop: "16px" }}>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button variant="danger" className="px-3 py-2">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default RightNav;
