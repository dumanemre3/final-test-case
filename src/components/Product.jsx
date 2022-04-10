import React from "react";
import { useState } from "react";
import "./products.css";

function Product({ data, onProductSelected }) {
  const id = data.id;
  const [isSelected, setIsSelected] = useState(false);
  const onCardClick = () => {
    onProductSelected(id);
    setIsSelected(!isSelected);
  };
  return (
    <div class="col">
      <div
        className={`card ${isSelected ? "selectedCard" : ""}`}
        onClick={() => onCardClick()}
        style={{ maxWidth: "500px" }}
      >
        <div class="row g-0">
          <div class="col-sm-5">
            <img
              src={data.imagePath}
              class="card-img-top h-100"
              alt="..."
              style={{ objectFit: "cover" }}
            />
          </div>
          <div class="col-sm-7">
            <div class="card-body">
              <h5 class="card-title">{data.name}</h5>
              <p class="card-text">
                {/* Alice is a freelance web designer and developer based in
                    London. She is specialized in HTML5, CSS3, JavaScript,
                    Bootstrap, etc. */}
                {data.details.map((el, index) => (
                  <span>{el} </span>
                ))}
                <br />
                {data.amount} {data.currency}
                <br />
                {data.tags.map((el, index) => (
                  <span>{el} </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
