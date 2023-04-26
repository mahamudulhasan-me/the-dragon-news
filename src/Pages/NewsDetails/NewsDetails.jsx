import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsDetails = (props) => {
  const { _id, title, details, thumbnail_url, image_url } = props.news;
  return (
    <Card className="mb-4">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`}>See More</Link>
            </>
          ) : (
            details
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default NewsDetails;
