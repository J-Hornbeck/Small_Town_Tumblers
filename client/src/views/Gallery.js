import React from "react";
import sttCoffee from "../static/images/sttCoffee.jpg";
import sttKC from "../static/images/sttKC.jpg";
import sttKC2 from "../static/images/sttKC2.jpg";
import sttRams from "../static/images/sttRams.jpg";
import sttWarsteiner from "../static/images/sttWarsteiner.jpg";
import useScript from "../components/useScript";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Gallery = () => {
  useScript();
  return (
    <div className="flex bg-1  justify-content-around">
      <Col className="flex col-10 bg-2 Row me-4 mt-4 mb-4 p-4 justify-content-around wrap">
        <img src={sttCoffee} alt="Coffee" id="main" />
        <Row className="col-10 bg-2  me-4 mt-4 mb-4 p-4 justify-content-around">
          <div id="thumbnails">
            <img src={sttCoffee} alt="Coffee" />
            <img src={sttKC} alt="KC State" />
            <img src={sttKC2} alt="KC State" />
            <img src={sttRams} alt="LA Rams" />
            <img src={sttWarsteiner} alt="Warsteiner" />
          </div>
        </Row>
      </Col>
    </div>
  );
};

export default Gallery;
