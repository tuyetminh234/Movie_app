import React from "react";
import Detail from "./components/detail/Detail";
import Showtimes from "./components/showtimes/Showtimes";
import "./movieDetail.scss"
export default function MovieDetail() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div id="detail">
          <Detail />
          </div>
          <div id="showTimes">
          <Showtimes />
          </div>
         
        </div>
      </div>
    </div>
  );
}
