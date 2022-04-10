import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

function CardInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const products = location.state.products;
  const selectedProdIDs = location.state.selectedProdIDs;
  console.log(products, selectedProdIDs);
  const [selectedProducts, setSelectedProducts] = useState([]);
  console.log(location.state);
  const newList = products.filter(
    (val, idx) => selectedProdIDs.indexOf(val.id) != -1
  );

  return (
    <div>
      <Header data={location.state.data}></Header>

      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h3>Kart Bilgileri</h3>
                  <div className="row">
                    <div className="col-6">
                      <div class="form-outline mb-4 mt-4">
                        <label
                          class="form-label d-flex flex-row bd-highlight mb-3"
                          for="form2Example1"
                        >
                          Kartın Üzerindeki İsim Soyisim
                        </label>
                        <input
                          type="text"
                          id="form2Example1"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div class="form-outline mb-4 mt-4">
                        <label
                          class="form-label d-flex flex-row bd-highlight mb-3"
                          for="form2Example1"
                        >
                          Kart Numarası
                        </label>
                        <input
                          type="number"
                          id="form2Example1"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <div class="form-outline mb-4 mt-4">
                        <label
                          class="form-label d-flex flex-row bd-highlight mb-3"
                          for="form2Example1"
                        >
                          Son Kul. Tar.
                        </label>
                        <input
                          type="date"
                          id="form2Example1"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <div class="form-outline mb-4 mt-4">
                        <label
                          class="form-label d-flex flex-row bd-highlight mb-3"
                          for="form2Example1"
                        >
                          CVV/CVC
                        </label>
                        <input
                          maxlength="3"
                          type="number"
                          id="form2Example1"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h3>Sepetteki Paketler</h3>
                  <ul>
                    {newList.map((val, index) => (
                      <li key={index}>
                        <div className="row">
                          <div className="col-9">{val.name}</div>
                          <div className="col-3">
                            {val.amount} {val.currency}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <span>Toplam:{location.state.totalPrice} ₺</span>
                  <button
                    onClick={() => navigate("/success")}
                    className="btn btn-primary form-control"
                  >
                    Ödeme Yap
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
