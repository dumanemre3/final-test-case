import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div class="card container mt-5" style={{ width: "18rem" }}>
      <img src="/assets/success.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Başarıyla Tamamlandı!</h5>
        <p class="card-text">İşleminiz yapıldı.</p>
        <Link to={"/"} class="btn btn-primary">
          Geri Dönebilirsiniz.
        </Link>
      </div>
    </div>
  );
}

export default Success;
