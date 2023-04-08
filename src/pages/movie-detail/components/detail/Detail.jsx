import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetailApi } from "../../../../services/movie";
import { formatDate } from "../../../../utils";
import "./detail.scss";

export default function Detail() {
  const [movieDetail, setMovieDetail] = useState({});
  const params = useParams();

  useEffect(() => {
    getMovieDetail();
  }, []);

  const getMovieDetail = async () => {
    const result = await fetchMovieDetailApi(params.id);

    setMovieDetail(result.data.content);
  };

  return (
    <div className="col-12 detail col-md-12 col-sm-12 col-sx-12">
      <div className="row">
        <div className="col-4">
          <img className="w-100" src={movieDetail.hinhAnh} />
        </div>
        <div className=" detail-right col-8">
          <h4>{movieDetail.tenPhim}</h4>
          <p>{movieDetail.moTa}</p>

          <div className="detail-rating">
            <span className="span-1">C17</span>
            Thời lượng: 
            <span> 124 phút </span>
          </div>

          <div className="detail-info">
            <div className="detail-info-row">
              Nhà sản xuất:
              <span> Marvel Studios</span>
            </div>
            <div className="detail-info-row">
              Quốc gia: 
              <span> Mỹ</span>
              <div />
            </div>
            <div className="detail-info-row">
              Thể loại:
              <span> Hành động</span>
            </div>
            <div className="detail-info-row">
              Diễn viên: 
              <span>
                 Evangeline Lilly, Michael Douglas, Michelle Pfeiffer, Bill
                Murray, Kathryn Newton, Paul Rudd
              </span>
            </div>
            <div className="detail-info-row">
              Đạo diễn:
              <span> Peyton Reed</span>
            </div>
            <div className="detail-info-row">
            Ngày khởi chiếu:
            <span className="time">
              {" "}
              {formatDate(movieDetail.ngayKhoiChieu)}
            </span>
            </div>
            
          </div>

          <div>
            
              <a type="button"className=" trailer btn btn-info mr-2" href={`${movieDetail.trailer}`}>TRAILER</a>
           
            
              <a type="button" className=" booking btn btn-info mr-2" href="#showTimes">MUA VÉ</a>
          
          </div>
        </div>
      </div>
    </div>
  );
}
