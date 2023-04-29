import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png"

const RightNav = () => {
  return (
    <div >
      <h4 className="mt-4">Login with</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login with Github
      </Button>
      <div>
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookSquare /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitterSquare /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instegram
          </ListGroup.Item>
        </ListGroup>
      </div>
        <QZone/>
        <div>
          <img src={bg} alt="" />
        </div>
    </div>
  );
};

export default RightNav;
