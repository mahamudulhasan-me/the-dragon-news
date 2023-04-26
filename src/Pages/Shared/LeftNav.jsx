import React, { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((response) => response.json())
      .then((categories) => setCategories(categories))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h4>All Category</h4>
      <div className="ms-4 mt-4 ">
        {categories.map((category) => (
          <h6 key={category.id} className="mt-3 ">
            <ActiveLink
              to={`category/${category.id}`}
              className="text-decoration-none"
            >
              {category.name}
            </ActiveLink>
          </h6>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
