import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookingHistoryApi } from "services/user";
import "./history.scss";
export default function History() {
  const params = useParams();

  const [history, setHistory] = useState();

//   console.log(history);
  useEffect(() => {
    getBookingtHistory();
  }, []);

  console.log(history)

  const getBookingtHistory = async () => {
    const result = await bookingHistoryApi(params.user);
    // console.log(result.data.content);
    setHistory(result.data.content);
  };

  const renderHistory = () => {
    return history?.thongTinDatVe?.map((ele) => {
      return (
        <div key={ele.maVe} className="history-info">
          <p>
            Ngày đặt: <span>{ele.ngayDat}</span>
          </p>
          <p>
            Tên phim: <span>{ele.tenPhim}</span>{" "}
          </p>
          <p>
            Giá vé: <span>{ele.giaVe}</span>{" "}
          </p>
          <p>
            Hệ thống Rạp: {" "}
            {ele?.danhSachGhe?.map((ele, index) => {
              if (index !== 0) return ""
              return (<span key={ele.maGhe}>{ele.tenHeThongRap}</span>);
            })}
          </p>
          <p>
            Rạp: {" "}
            {ele?.danhSachGhe?.map((ele, index) => {
              if (index !== 0) return "";
              return (<span key={ele.maGhe}>{ele.tenCumRap}</span>);
            })}{" "}
            Ghế số: {" "}
            {ele?.danhSachGhe?.map((ele) => {
              return (<span key={ele.maGhe}>{ele.tenGhe}  </span>);
            })}{" "}
          </p>
        </div>
      );
    });
  };

  return (
    <div className="history">
      <h1>Lịch sử đặt vé</h1>
      <hr />
      <div className="history-content">{renderHistory()}</div>
    </div>
  );
}
