import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Product from "./Product";

function Products() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("emre", location.state.data);
  const [products, setProducts] = useState([]);
  const [selectedProdIDs, setSelectedProdIDs] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const onProductSelected = (id) => {
    let newList = [...selectedProdIDs];
    let index = newList.indexOf(id);
    if (index == -1) newList.push(id);
    else newList.splice(index, 1);
    setSelectedProdIDs(newList);
  };

  useEffect(() => {
    const selectedList = products.filter(
      (val, idx) => selectedProdIDs.indexOf(val.id) != -1
    );
    console.log(selectedList);
    let sum = 0;
    for (let i = 0; i < selectedList.length; i++) {
      sum += selectedList[i].amount;
    }
    setTotalPrice(sum);
  }, [selectedProdIDs]);

  const onButonClick = () => {
    navigate("/cardinfo", {
      state: {
        selectedProdIDs,
        totalPrice,
        products,
        data: location.state.data,
      },
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((response) => {
      // console.log("/products", response.data);
      setProducts(response.data);
    });
  }, []);
  return (
    <>
      <Header data={location.state.data}></Header>
      <div className="container mt-5">
        <div class="row row-cols-1 row-cols-md-3 g-3">
          {products.map((el, index) => (
            <Product
              onProductSelected={onProductSelected}
              data={el}
              key={index}
            />
          ))}
        </div>
        <div class="d-flex justify-content-between mb-3 mt-5">
          <div class="p-2">
            Seçilen Paket Tutarı: <small className="fs-4">{totalPrice} ₺</small>
          </div>
          <button
            onClick={() => onButonClick()}
            className="p-2 btn btn-primary btn-block mb-5"
          >
            Devam Et
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
