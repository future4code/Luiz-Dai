import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useForm from "./hooks/useForm";

function TripDetailsPage(props) {
  const [detail, setDetail] = useState();

  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  return (
    <div>
      <h1>TripDetailsPage</h1>
    </div>
  );
}
export default TripDetailsPage;
