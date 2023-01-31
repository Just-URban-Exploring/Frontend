import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiParkBench, HiShoppingBag } from "react-icons";
import styles from "../css/Icons.css";

const Icons = () => {
  return (
    <div>
      <div className="museum">
        <div className="circleBase circle1"></div>
        <FontAwesomeIcon icon="fa-solid fa-building-columns" inverse />
      </div>
      <div className="seight-seeing">
        <div className="circleBase circle2"></div>
        <FontAwesomeIcon icon="fa-solid fa-star" inverse />
      </div>
      <div className="best-view">
        <div className="circleBase circle3"></div>
        <FontAwesomeIcon icon="fa-solid fa-camera" inverse />
      </div>
      <div className="cafe">
        <div className="circleBase circle4"></div>
        <FontAwesomeIcon icon="fa-solid fa-mug-hot" inverse />
      </div>
      <div className="food">
        <div className="circleBase circle5"></div>
        <FontAwesomeIcon icon="fa-solid fa-utensils" inverse />
      </div>
      <div className="toilet">
        <div className="circleBase circle6"></div>
        <FontAwesomeIcon icon="fa-solid fa-toilet" inverse />
      </div>
      <div className="park">
        <div className="circleBase circle7"></div>
        <GiParkBench />
      </div>
      <div className="transportation">
        <div className="circleBase circle8"></div>
        <FontAwesomeIcon icon="fa-solid fa-bus" inverse />
      </div>
      <div className="art">
        <div className="circleBase circle9"></div>
        <FontAwesomeIcon icon="fa-solid fa-palette" inverse />
        <FontAwesomeIcon icon="fa-solid fa-music" inverse />
      </div>
      <div className="shop">
        <div className="circleBase circle10"></div>
        <HiShoppingBag />
      </div>
      <div className="nature">
        <div className="circleBase circle11"></div>
        <FontAwesomeIcon icon="fa-brands fa-pagelines" inverse />
      </div>
      <div className="secret">
        <div className="circleBase circle12"></div>
        <FontAwesomeIcon icon="fa-solid fa-user-secret" />
      </div>
    </div>
  );
};

export default Icons;
