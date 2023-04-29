import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import { Container } from 'react-bootstrap';

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  console.log(categoryNews);

  return (
    <Container>
      <h2>This is a catagory:{categoryNews.length}</h2>
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </Container>
  );
};

export default Category;
