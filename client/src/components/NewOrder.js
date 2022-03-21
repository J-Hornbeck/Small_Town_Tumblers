import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TumblerForm from "./TumblerForm";
import { Row, Col } from "react-bootstrap";

const New = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const [decal, setDecal] = useState();
  const [concept, setConcept] = useState();
  const [details, setDetails] = useState();
  const [glitter, setGlitter] = useState();
  const [tumblerSize, setTumblerSize] = useState();
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    axios
      .post(`http://localhost:8000/api/tumbler`, {
        Name: { firstName: firstName, lastName: lastName },
        Email: email,
        Phone: phone,
        Shipping: {
          address: address,
          address2: address2,
          state: state,
          zip: zip,
        },
        Decal: decal,
        Concept: concept,
        Details: details,
        Glitter: glitter,
        TumblerSize: tumblerSize,
      })

      .then((res) => {
        console.log(res.data);
        navigate("/tumbler");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <div className="bg-1">
      <Col className="container-sm bg-1">
        <Row className="bg-2 justify-content-center Row">
          <h1 className="t-1 fs-1">Small Town Tumblers Custom Tumbler Form</h1>
          <p className="t-1 col-4">
            All must be paid in full for me to start on your
          </p>
          <p className="t-1"></p>
          <p className="t-1 col-4">
            Once this form is submitted you will receive a message from me
            confirming your request and getting any other information needed on
            design , as well as how to send payment
          </p>
          <p></p>
          <p className="t-1 col-4">
            Updates on your will be sent while your is being worked on, and
            shipping information will also be sent once your has been shipped or
            day of drop off!
          </p>
          <p></p>
          <p className="t-1 col-4">
            Thank you for supporting my small business!
          </p>
        </Row>
        <br />
        <TumblerForm
          firstName={firstName}
          lastname={lastName}
          email={email}
          phone={phone}
          address={address}
          address2={address2}
          state={state}
          zip={zip}
          decal={decal}
          concept={concept}
          details={details}
          glitter={glitter}
          tumblerSize={tumblerSize}
          errors={errors}
          setErrors={setErrors}
          onSumbitHandler={onSubmitHandler}
          setFirstName={setFirstName}
          setLastname={setLastName}
          setEmail={setEmail}
          setPhone={setPhone}
          setAddress={setAddress}
          setAddress2={setAddress2}
          setState={setState}
          setZip={setZip}
          setDecal={setDecal}
          setConcept={setConcept}
          setDetails={setDetails}
          setGlitter={setGlitter}
          setTumblerSize={setTumblerSize}
        />
      </Col>
    </div>
  );
};
export default New;
