import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsDetails = (props) => {
  const {
    _id,
    title,
    details,
    thumbnail_url,
    image_url,
    author,
    total_view,
    rating,
  } = props.news;
  return (
    <Card className="mb-4">
      <Card.Header>
        <div className="d-flex align-items-center">
          {author ? (
            <div className="d-flex flex-grow-1 align-items-center">
              <Image
                src={author?.img}
                roundedCircle
                style={{ width: "40px", height: "40px" }}
              />{" "}
              <div>
                <p className="mb-0">{author?.name}</p>{" "}
                <p>{moment(author?.published_date).format("MMM D, YY")}</p>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="d-flex">
            <FaRegBookmark />
            <FaShareAlt />
          </div>
        </div>
      </Card.Header>
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
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating?.number}
            emptySymbol={<FaRegStar />}
            readonly
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar />}
          />
        </div>
        <div>
          <FaEye />
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsDetails;
