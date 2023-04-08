import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bookTicketApi, fetchTicketDetailApi } from "../../services/ticket";
import Seat from "./components/Seat";
import * as _ from "lodash";
import "./booking.scss";
export default function Booking() {
  const [ticketDetail, setTicketDetail] = useState({});
  const [selectedSeatList, setSelectedSeatList] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTicketDetail();
  }, []);

  const getTicketDetail = async () => {
    const result = await fetchTicketDetailApi(params.id);

    console.log(result);

    setTicketDetail(result.data.content);
  };

  const renderSeats = () => {
    return ticketDetail?.danhSachGhe?.map((ele, idx) => {
      return (
        <React.Fragment key={ele.maGhe}>
          <Seat ele={ele} handleSelect={handleSelect} />
          {(idx + 1) % 16 === 0 && <br />}
        </React.Fragment>
      );
    });
  };

  const handleSelect = (seat) => {
    const data = [...selectedSeatList];
    const idx = data.findIndex((ele) => ele.maGhe === seat.maGhe);

    if (idx !== -1) {
      data.splice(idx, 1);
    } else {
      data.push(seat);
    }

    setSelectedSeatList(data);
    // console.log(selectedSeatList);
  };

  useEffect(() => {
    console.log(selectedSeatList);
  }, [selectedSeatList]);

  const bookTicket = async () => {
    const data = {
      maLichChieu: params.id,
      danhSachVe: selectedSeatList.map((ele) => {
        return {
          maGhe: ele.maGhe,
          giaVe: ele.giaVe,
        };
      }),
    };

    await bookTicketApi(data);
    alert("Đặt vé thành công");
    navigate("/");
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-8">
          <div className="screen text-center mb-5"></div>
          <div style={{ width: "95%" }} className="mx-auto">
            {renderSeats()}
          </div>
          <div className=" mt-5">
          <button className=" vip"></button>{" "}
            <span className="text-dark">Ghế VIP</span>
            <br />
            <button className="mt-3 selected"></button>{" "}
            <span className="text-dark">Ghế đã đặt</span>
            <br />
            <button className="mt-3 booked "></button>{" "}
            <span className="text-dark">Ghế đang chọn</span>
            <br />
            <button className="mt-3 available"></button>{" "}
            <span className="text-dark">Ghế chưa đặt</span>
          </div>
        </div>

        <div className="col-4">
          <div className="ticket-right">
            <div className="poster">
              <img
                className="movie-img"
                src={ticketDetail?.thongTinPhim?.hinhAnh}
                alt="#"
              />
            </div>

            <div className="movie-name-book">
              <h4 className="mb-0">{ticketDetail?.thongTinPhim?.tenPhim}</h4>
            </div>
            <hr className="border" />
            <div className="display padding">
              <h4 className="book-h4">Cụm rạp:</h4>
              <h4 className="book-info book-info-h4">
                {ticketDetail?.thongTinPhim?.tenCumRap}
              </h4>
            </div>
            <hr className="border" />
            <div className="display padding">
              <h4 className="book-h4">Địa chỉ:</h4>
              <h4 className="book-info book-info-h4">
                {ticketDetail?.thongTinPhim?.diaChi}
              </h4>
            </div>
            <hr className="border" />
            <div className="display padding">
              <h4 className="book-h4">Rạp:</h4>
              <h4 className="book-info book-info-h4">
                {ticketDetail?.thongTinPhim?.tenRap}
              </h4>
            </div>
            <hr className="border" />
            <div className="display padding">
              <h4 className="book-h4">Ngày chiếu:</h4>
              <h4 className="book-info book-info-h4">
                {ticketDetail?.thongTinPhim?.ngayChieu}
              </h4>
            </div>
            <hr className="border" />

            <div className="display padding">
              <h4 className="book-h4">Ghế chọn:</h4>
              <h4 className="book-info book-info-h4">
                {selectedSeatList.map((ele) => {
                  return (
                    <p
                      key={ele.maGhe}
                      className="badge badge-success mr-2 mb-0"
                    >
                      {ele.tenGhe}
                    </p>
                  );
                })}
              </h4>
            </div>
            <hr className="border" />

            <div className="display padding">
              <h4 className="book-h4">Tổng tiền:</h4>
              <h4 className="book-info book-info-h4">
                {" "}
                {_.sumBy(selectedSeatList, "giaVe").toLocaleString()}
              </h4>
            </div>

            <button onClick={bookTicket} className="btn btn-danger book-style">
              ĐẶT VÉ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
