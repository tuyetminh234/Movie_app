import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useMovieList } from "../../../../hooks/useMovieList";
import "./style.movie.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MovieList() {
  const navigate = useNavigate();
  const movieList = useMovieList();

  const settings = {
    dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    initialSlide: 0,
      rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const renderMovieList = () => {
    return movieList.map((ele) => {
      return (
        <div  key={ele.maPhim} style={{ padding: "20px" }}>
          <div
            className="card movie-card"
            style={{ marginBottom: 20, height: "500px" }}
          >
            <img
              style={{ height: 350, objectFit: "cover", width:"100%" }}
              className="card-img-top"
              src={ele.hinhAnh}
              alt="movie"
            />
            <div className="card-body">
              <h5 className="card-title">{ele.tenPhim}</h5>
              <Button className="show-detail"
                onClick={() => navigate(`/movie-detail/${ele.maPhim}`)}
                size="large"
                type="primary"
              >
                XEM CHI TIẾT
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div id="movieList" className="movie-list">
      <h3>Phim đang chiếu</h3>
<div className=" row mt-3 mx-auto w-75">
      
      <Slider {...settings}>
      {renderMovieList()}
      </Slider>
    </div>
    </div>
    
  );
}
