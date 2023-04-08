import React from "react";
import CarouselMovies from "./components/carousel/CarouselMovies";
import MovieList from "./components/movie-list/MovieList";
import News from "./components/news/News";
import Promotion from "./components/promotion/Promotion";
import TheaterSystem from "./components/theaterSystem/TheaterSystem";
import "./homePage.scss";

export default function HomePage() {
  return (
    <div>
      <CarouselMovies />
      <MovieList />
      <TheaterSystem />
      <News />
      <Promotion/>
    </div>
  );
}
