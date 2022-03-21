import React from "react";
import axios from "axios";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";

const DeleteButton = (props) => {
  const { tumblerId, successCallback } = props;
  const navigate = useNavigate();
  const deleteTumbler = (e) => {
    console.log(tumblerId);
    axios
      .delete(`http://localhost:8000/api/tumbler/${tumblerId}`)
      .then((res) => {
        navigate("/tumbler");
        successCallback();
      })
      .catch((err) => console.log(err));
  };
  return (
    <button onClick={deleteTumbler}>
      <p className="font-brush border-2 gradient fs-1">Complete</p>
    </button>
  );
};

export default DeleteButton;
