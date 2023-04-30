import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "../QZone/Qzone";
import bg1 from "../../../assets/bg1.png";

const RightNav = () => {
  return (
    <div>
      <h4>Login With </h4>
      <Button className="mb-2" variant="outline-primary">
        {" "}
        <FaGoogle /> Login With Google
      </Button>{" "}
      <Button variant="outline-secondary">
        {" "}
        <FaGithub /> Login With Github
      </Button>{" "}
      <div>
        <h4>Fid Us on </h4>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div>
        <img src={bg1} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
