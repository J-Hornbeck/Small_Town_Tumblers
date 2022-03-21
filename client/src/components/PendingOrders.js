import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import UpdateOrder from "./UpdateOrder";
import NewOrder from "./NewOrder";

const PendingOrders = () => {
  const [orders, setOrders] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/tumbler`).then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  }, []);

  return (
    <div className="flex bg-1 justify-content-around ">
      <Col className="col-5 bg-2 Row m-4">
        <h1 className="bg-2 t-1 fs-1">Pending Orders</h1>
        <ul>
          <li className="t-1 bg-2 fs-3">
            Last name, First name, Size, Details
          </li>
          {orders
            ? orders.map((order, index) => (
                <li key={index}>
                  <Link
                    to={`/tumbler/pending/${order._id}`}
                    className="bg-2 t-1 fs-3"
                  >
                    {order.Name.lastName}, {order.Name.firstName}, {""}
                    {order.TumblerSize}, {order.Details}
                  </Link>
                </li>
              ))
            : null}
        </ul>
      </Col>
      <Col className="col-5 bg-1 me-4 mt-4">
        {id ? <UpdateOrder className="me-4" /> : <NewOrder className="me-4" />}
      </Col>
    </div>
  );
};

export default PendingOrders;
