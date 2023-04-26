import React from "react";
import { useLoaderData } from "react-router-dom";

const News = () => {
  const { title, details, image_url } = useLoaderData();
  return (
    <div>
      <h4>{title}</h4>
      <img src={image_url} alt="" />
      <p>{details}</p>
    </div>
  );
};

export default News;
