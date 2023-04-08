import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieShowtimesApi } from "../../../../services/cinema";
import moment from "moment";
import { formatDate } from "../../../../utils";
import "./showTimes.scss";
export default function Showtimes() {
  const [movieShowtimes, setMovieShowtimes] = useState({});
  const params = useParams();

  useEffect(() => {
    getMovieShowtimes();
  }, []);

  const getMovieShowtimes = async () => {
    const result = await fetchMovieShowtimesApi(params.id);
    console.log(result);
    setMovieShowtimes(result.data.content);
  };

  const renderTabs = () => {
    return movieShowtimes?.heThongRapChieu?.map((ele, idx) => {
      return (
        <a
          key={ele.maHeThongRap}
          className={`system nav-link text-capitalize ${idx === 0 && "active"}`}
          data-toggle="pill"
          href={`#${ele.maHeThongRap}`}
          role="tab"
          aria-selected="true"
        >
          <div className="logo-left">
            <img className="logo" src={ele.logo} />
            {/* <p>{ele.tenHeThongRap}</p> */}
          </div>
        </a>
      );
    });
  };

  const renderTabContents = () => {
    return movieShowtimes?.heThongRapChieu?.map((ele, idx) => {
      return (
        <div
          key={ele.maHeThongRap}
          className={`tab-pane fade show ${idx === 0 && "active"}`}
          id={ele.maHeThongRap}
          role="tabpanel"
        >
          {ele?.cumRapChieu?.map((ele) => {
            return (
              <div key={ele.maCumRap} className=" time-respon row mb-5">
                <div className="col-2">
                  <img className="img-fluid rounded" src={ele.hinhAnh} />
                </div>
                <div className="col-10 pl-0">
                  <h5>{ele.tenCumRap}</h5>
                  <span className="text-muted">{ele.diaChi}</span>
                </div>
                <div className="col-12 show-dateTime">
                  <div className="row">
                    {ele?.lichChieuPhim?.map((ele) => {
                      return (
                        <div className="show-times col-3" key={ele.maLichChieu}>
                          <Link to={`/booking/${ele.maLichChieu}`}>
                            {formatDate(ele.ngayChieuGioChieu)}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className=" col-12 mt-5">
      <h3>Lịch chiếu</h3>
      <div className="show-system row">
        <div className="col-lg-4">
          <div
            className=" system-content nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {renderTabs()}
          </div>
        </div>
        <div className="col-lg-8">
          <div className="tab-content" id="v-pills-tabContent">
            {renderTabContents()}
          </div>
        </div>
      </div>
    </div>
  );
}
