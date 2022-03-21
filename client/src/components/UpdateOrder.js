import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TumblerForm from "./TumblerForm";
import Col from "react-bootstrap/Col";
import DeleteButton from "./DeleteButton";

const UpdateOrder = (props) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [updateFirstName, setUpdateFirstName] = useState();
  const [updateLastName, setUpdateLastName] = useState();
  const [updateAddress, setUpdateAddress] = useState();
  const [updateAddress2, setUpdateAddress2] = useState();
  const [updateState, setUpdateState] = useState();
  const [updateZip, setUpdateZip] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/tumbler/${id}`)
      .then((res) => {
        console.log("this is res.data");
        console.log(res.data);
        setOrder(res.data);
        setUpdateFirstName(res.data.Name.firstName);
        setUpdateLastName(res.data.Name.lastName);
        setUpdateAddress(res.data.Shipping.address);
        setUpdateAddress2(res.data.Shipping.address2);
        setUpdateState(res.data.Shipping.state);
        setUpdateZip(res.data.Shipping.zip);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log("this is orders");
  console.log({ order });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    axios
      .put(`http://localhost:8000/api/tumbler`, {
        Name: {
          firstName: order.Name.firstName,
          lastName: order.Name.lastName,
        },
        Email: order.Email,
        Phone: order.Phone,
        Shipping: {
          address: order.Shipping.address,
          address2: order.Shipping.address2,
          state: order.Shipping.state,
          zip: order.Shipping.zip,
        },
        Decal: order.Decal,
        Concept: order.Concept,
        Details: order.Details,
        Glitter: order.Glitter,
        TumblerSize: order.TumblerSize,
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

  const removeFromDom = (orderId) => {
    setOrder(order.filter((orders) => orders._id != orderId));
  };

  return (
    <div>
      <Col className="container-sm bg-1">
        <DeleteButton
          tumblerId={order._id}
          successfulCallback={() => removeFromDom(order._id)}
        />
        <TumblerForm
          firstName={updateFirstName}
          email={order.Email}
          lastname={updateLastName}
          phone={order.Phone}
          address={updateAddress}
          address2={updateAddress2}
          state={updateState}
          zip={updateZip}
          decal={order.Decal}
          concept={order.Concept}
          details={order.Details}
          glitter={order.Glitter}
          tumblerSize={order.TumblerSize}
          errors={errors}
          onSumbitHandler={onSubmitHandler}
          setFirstName={setUpdateFirstName}
          setLastname={setUpdateLastName}
          setEmail={setOrder.Email}
          setPhone={setOrder.Phone}
          setAddress={setUpdateAddress}
          setAddress2={setUpdateAddress2}
          setState={setUpdateState}
          setZip={setUpdateZip}
          setDecal={setOrder.Decal}
          setConcept={setOrder.Concept}
          setDetails={setOrder.Details}
          setGlitter={setOrder.Glitter}
          setTumblerSize={setOrder.TumblerSize}
        />
      </Col>
    </div>
  );
};
export default UpdateOrder;
