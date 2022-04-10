import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const onButtonClick = () => {
    axios
      .get("http://localhost:3000/signup", {
        fullName: "Emre Duman",
        email: "duem30@hotmail.com",
      })
      .then((response) => {
        navigate("/products", { state: { data: response.data } });
      });
  };

  return (
    <form class="container card mt-4" style={{ width: "30%" }}>
      <div class="form-outline mb-4 mt-4">
        <label
          class="form-label d-flex flex-row bd-highlight mb-3"
          for="form2Example1"
        >
          Adınız Soyadınız
        </label>
        <input type="text" id="form2Example1" class="form-control" />
      </div>

      <div class="form-outline mb-4 mt-4">
        <label
          class="form-label d-flex flex-row bd-highlight mb-3"
          for="form2Example2"
        >
          Email Adresiniz
        </label>
        <input type="email" id="form2Example2" class="form-control" />
      </div>
      <button
        onClick={() => onButtonClick()}
        type="button"
        class="btn btn-primary btn-block mb-4 form-control"
      >
        Devam Et
      </button>
    </form>
  );
}

export default Login;
