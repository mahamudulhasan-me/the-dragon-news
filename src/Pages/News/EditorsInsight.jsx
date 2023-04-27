import React from "react";
import { Card } from "react-bootstrap";

const EditorsInsight = (props) => {
  return (
    <Card className="my-3">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EditorsInsight;
