import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import editor1 from "../../assets/editorsInsight1.png";
import editor2 from "../../assets/editorsInsight2.png";
import editor3 from "../../assets/editorsInsight3.png";
import EditorsInsight from "./EditorsInsight";
const News = () => {
  const { title, details, image_url, category_id } = useLoaderData();
  return (
    <>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft /> All News In This Category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <div className="mt-4">
        <h3>Editor Insight</h3>
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <EditorsInsight image={editor1}></EditorsInsight>{" "}
          </Col>
          <Col>
            <EditorsInsight image={editor2}></EditorsInsight>
          </Col>
          <Col>
            <EditorsInsight image={editor3}></EditorsInsight>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default News;
