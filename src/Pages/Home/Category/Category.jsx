import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsDetails from "../../NewsDetails/NewsDetails";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      {categoryNews.map((news) => (
        <NewsDetails key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Category;
