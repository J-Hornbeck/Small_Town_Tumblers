import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TumblerForm = (props) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    address2,
    setAddress2,
    state,
    setState,
    zip,
    setZip,
    decal,
    setDecal,
    concept,
    setConcept,
    details,
    setDetails,
    glitter,
    setGlitter,
    tumblerSize,
    setTumblerSize,
    errors,
    setErrors,
    onSubmitHandler,
  } = props;

  const glitterSelect = (e) => {
    setGlitter(e.target.value);
  };
  const sizeSelect = (e) => {
    setTumblerSize(e.target.value);
  };

  return (
    <Form onSubmit={onSubmitHandler} className="bg-1">
      {errors &&
        errors.map((err, index) => (
          <p className="t-1" key={index}>
            {err}
          </p>
        ))}
      <>
        <br />
        <Row className="bg-2 justify-content-center Row">
          <h1 className="t-1 fs-1"> Your Information</h1>
          <div className="col-7">
            <label className="t-1 col-4">Email</label>
            <br />
            <input
              type="text"
              name="Email"
              placeholder="Email"
              value={email}
              className="col-4 t-1 bg-4"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <span className="pe-2 ps-2 t-1">First and Last Name</span>
            <div className="input-group t-1 justify-content-center">
              <input
                type="text"
                aria-label="First Name"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                className="col-4 t-1 bg-4 me-4"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                aria-label="Last Name"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                className="col-4 t-1 bg-4"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <br />
            <label className="t-1">Phone</label>
            <br />
            <input
              type="text"
              name="Phone"
              placeholder="Phone Number"
              value={phone}
              className="col-4 t-1 bg-4"
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <br />
            <span className="t-1">Full Address</span>
            <div className="input-group t-1 justify-content-center">
              <input
                type="text"
                aria-label="Address"
                name="address"
                placeholder="Address"
                value={address}
                className="col-4 t-1 bg-4 me-4 mb-2"
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                aria-label="Address2"
                name="address2"
                placeholder="Address 2"
                value={address2}
                className="col-4 t-1 bg-4 mb-2"
                onChange={(e) => setAddress2(e.target.value)}
              />
              <input
                type="text"
                aria-label="State"
                name="state"
                placeholder="State"
                value={state}
                className="col-4 t-1 bg-4 me-4 mb-4"
                onChange={(e) => setState(e.target.value)}
              />
              <input
                type="text"
                aria-label="Zip"
                name="zip"
                placeholder="Zip code"
                value={zip}
                className="col-4 t-1 bg-4 mb-4"
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
          </div>
        </Row>
        <br />
        <Row className="bg-2 flex justify-content-center p-2 Row">
          <label className="t-1">Decal</label>

          <input
            type="text"
            name="Decal"
            value={decal}
            className="col-4 t-1 bg-4"
            onChange={(e) => setDecal(e.target.value)}
          />
          <label className="t-1">Concept</label>
          <input
            type="text"
            name="Concept"
            value={concept}
            className="col-4 t-1 bg-4"
            onChange={(e) => setConcept(e.target.value)}
          />
          <label className="t-1">Details</label>
          <input
            type="text"
            name="Details"
            value={details}
            className="col-4 t-1 bg-4 mb-3"
            onChange={(e) => setDetails(e.target.value)}
          />
        </Row>
        <br />
        <Row className="bg-2 flex justify-content-center p-2 Row">
          <label for="glitter">Glitter?</label>
          <select
            id="gliiter"
            placeholder="Glitter?"
            className="col-2 border-2"
            onChange={glitterSelect}
            value={glitter}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <label for="tumblerSize">Tumbler Size</label>
          <select
            id="tumblerSize"
            placeholder="Tumbler Size?"
            className="col-2 border-2 mb-3"
            onChange={sizeSelect}
            value={tumblerSize}
          >
            <option value="10 oz">10 oz</option>
            <option value="20 oz">20 oz</option>
            <option value="30 oz">30 oz</option>
            <option value="40 oz">40 oz</option>
            <option value="Yeti">Yeti Tumbler</option>
          </select>
        </Row>
        <br />
        <Row className="bg-2 justify-content-center p-2 Row">
          <button className="btn bg-4 Row border-2 col-4 m-2" type="submit">
            Submit
          </button>
        </Row>
        <br />
        <br />
      </>
    </Form>
  );
};
export default TumblerForm;
