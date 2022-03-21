import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Samantha_Alvarez from "../static/images/Samantha_Alvarez.jpg";
import Image from "react-bootstrap/Image";
import { BsInstagram } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex bg-1 justify-content-around ">
      <Col className="col-5 bg-2 Row me-4 mt-4 mb-4 p-4">
        <h1 className="bg-2 t-1 fs-1">About me</h1>
        <Image className="mb-3" src={Samantha_Alvarez} alt="Samantha Alvarez" />
        <a href="https://www.instagram.com/small_town_tumbler/">
          <div className="flex bg-2 justify-content-center ">
            <BsInstagram className="insta" />
            <p className="t-1 bg-2 fs-4"> Visit Instagram </p>
          </div>
        </a>
        <p className="t-1 bg-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita hic
          sunt ad corrupti accusantium tempora minus, aperiam iure sit vero
          accusamus omnis fuga cum magni aspernatur quos laboriosam at,
          veritatis, ducimus obcaecati totam quod adipisci ratione! Neque
          dolorem quisquam eos, animi numquam unde repellat ab magni ipsum,
          nemo, optio exercitationem?
        </p>
        <p className="t-1 bg-2">
          Dolor, quam voluptatum rerum ratione quidem sapiente corrupti id,
          fugiat illum eligendi deserunt accusamus magni iste laborum quisquam
          est perspiciatis similique! Velit, est id! Voluptatibus inventore
          mollitia eum nobis omnis atque voluptatum illo repudiandae quam
          laboriosam delectus, voluptatem magni deserunt odio quidem neque
          consequatur, vero porro quia. Aperiam, iusto quod.
        </p>
      </Col>
    </div>
  );
};

export default Home;
