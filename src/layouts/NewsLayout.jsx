import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftNav from "../pages/Shared/leftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";

const newsLayout = () => {
    return (
        <div>
            <Header />
      <Container>
        <Row>
          
          <Col lg={9}>
            <Outlet/>
          </Col>
          <Col lg={3}>
            <RightNav/>
          </Col>
        </Row>
      </Container>
      <Footer />
        </div>
    );
};

export default newsLayout;