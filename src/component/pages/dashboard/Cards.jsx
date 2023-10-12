import React from "react";
import "./Cards.css";

const Cards = ({cardArr}) => {
  console.log(cardArr,' card')
  return (
    <div>
      <div className="container">
        {cardArr.map((x, i) => {
          return (
            <div key={i} className="card">
              <div class="imgBx">
                <img src={x.img} alt="" />
              </div>
              <div className="contentBx">
                <h2>{x.title}</h2>

                <a href="#">
                  <i className="bx bx-right-arrow-alt"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
