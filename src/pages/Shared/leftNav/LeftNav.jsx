import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then(data => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
      <h4>All Category </h4>
     <div className="ps-4">
     {categories.map((category) => 
       <p key={category.id}>
        <Link to={`/category/${category.id}`} className="text-decoration-none text-black" >{category.name}</Link> 
       </p>
      )}
     </div>
    </Container>
  );
};

export default LeftNav;
