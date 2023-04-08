import React, { useEffect, useState } from "react";
import { fetchTheaterSystemApi } from "services/theater";
import { formatDate } from "utils";
import { Link, useParams } from "react-router-dom";
import "./theaterSystem.scss";

export default function TheaterSystem() {
  const [theaterSystem, setTheaterSystem] = useState([]);
  const [idTheater, setIdTheater] = useState("CGV");
  const [idMovie, setIdMovie] = useState("cgv-aeon-tan-phu");
  const params = useParams()
  useEffect(() => {
    getTheaterSystem();
  }, []);

  const getTheaterSystem = async () => {
    const result = await fetchTheaterSystemApi();
    console.log(result);
    setTheaterSystem(result.data.content);
  };

  const renderThearterSystem = () => {
    return theaterSystem.map((ele, idx) => {
      return (
        <button
          key={ele.maHeThongRap}
          className={`nav-link text-capitalize `}
          data-toggle="pill"
          href={`#${ele.maHeThongRap}`}
          role="tab"
          aria-selected="true"
          onClick={() => {
            setIdTheater(ele.maHeThongRap);
          }}
        >
          <div className="logo">
            <img src={ele.logo} />
          </div>
        </button>
      );
    });
  };

  const renderTheaterAddress = () => {
    return theaterSystem?.map((ele, idx) => {
      if (idTheater === ele.maHeThongRap) {
        return (
          <div
            key={ele.maHeThongRap}
            className={`tab-pane fade show  `}
            id={ele.maHeThongRap}
            role="tabpanel"
          >
            {ele?.lstCumRap?.map((ele) => {
              return (
                <div className="flex-column  ">
                  <button
                    key={ele.maCumRap}
                    className={`nav-link text-capitalize `}
                    data-toggle="pill"
                    href={`#${ele.maHeThongRap}`}
                    role="tab"
                    aria-selected="true"
                    onClick={() => {
                      setIdMovie(ele.maCumRap);
                    }}
                  >
                    <span>
                      <div>
                        <h4>{ele.tenCumRap}</h4>
                        <h6>{ele.diaChi}</h6>
                        <a>[Chi tiet]</a>
                      </div>
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        );
      }
    });
  };

  const renderShowtimes = () => {
    return theaterSystem?.map((ele, idx) => {
      return (
        <div key={ele.maHeThongRap}>
          {ele?.lstCumRap?.map((ele) => {
            if (idMovie === ele.maCumRap) {
              return (
                <div key={ele.maCumRap}>
                  {ele?.danhSachPhim?.map((ele) => {
                    return (
                      <div key={ele.maPhim} className="flex-column ">
                        <div className="theater-content">
                          <img className="theater-img" src={ele.hinhAnh} />
                          <div className=" right-content">
                            <h2 className="right-content-h2">
                              <span className="movie-name">C17</span>
                              {ele.tenPhim}
                            </h2>
                            <div className="showTime-detail">
                              {ele?.lstLichChieuTheoPhim?.map((ele) => {
                                return (
                                  <a
                                    key={ele.maLichChieu}
                                    className="showTime-detail-a"
                                    href={`/booking/${ele.maLichChieu}`}
                                  >
                                    <div className="times">
                                      <p>
                                        {" "}
                                        {formatDate(ele.ngayChieuGioChieu)}
                                      </p>
                                    </div>
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            }
          })}
        </div>
      );
    });
  };

  return (
    <div id="theater" className="theater mt-5">
       <h3>Hệ thống rạp</h3>
    <div className="content">
    <div className="theater-system ">{renderThearterSystem()}</div>
      <div className="theater-address">{renderTheaterAddress()}</div>
      <div className="theater-showtimes">{renderShowtimes()}</div>
    </div>
  </div>
   
  );
}
