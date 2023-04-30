import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <div className="ps-4">
        <h4>all Category</h4>
        {catagories.map((catagory) => (
          <p key={catagory.id}>
            <Link
              to={`/catagory=/${catagory.id}`}
              className="text-decoration-none text-black"
            >
              {catagory.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
