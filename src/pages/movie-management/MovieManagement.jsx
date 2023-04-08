import React from "react";
import { Button, notification, Space, Table, Tag, Input } from "antd";
import { useMovieList } from "hooks/useMovieList";
import { formatDate } from "utils";
import { useNavigate } from "react-router-dom";
import { deleteMovieApi } from "services/movie";
import {
  CalendarOutlined,
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const { Search } = Input;

export default function MovieManagement() {
  const movieList = useMovieList();
  // console.log(movieList);
  const navigate = useNavigate();

  const columns = [
    {
      title: "Tên phim",
      key: "1",
      dataIndex: "tenPhim",
    },
    {
      title: "Ngày khởi chiếu",
      key: "2",
      dataIndex: "ngayKhoiChieu",
      render: (text) => formatDate(text),
    },
    {
      title: "Mô tả",
      key: "3",
      dataIndex: "moTa",
    },
    {
      title: "Đánh giá",
      key: "4",
      dataIndex: "danhGia",
    },
    {
      title: "Hành động",
      key: "5",
      render: (text) => {
        // console.log(text);
        return (
          <div style={{ display: "flex" }}>
            <EditOutlined
              style={{ color: "blue", fontSize: 20, marginRight: 3 }}
              onClick={() =>
                navigate(`/admin/movie-management/edit/${text.maPhim}`)
              }
            />
            <DeleteOutlined
              style={{ color: "red", fontSize: 20, marginRight: 3 }}
              onClick={async () => {
                try {
                  if (window.confirm("Bạn xác nhận muốn xóa phim này?")) {
                    await deleteMovieApi(text.maPhim);
                    notification.success({
                      message: "Xóa phim thành công",
                    });
                  }
                } catch (error) {
                  notification.error({
                    message: error.response.data.content,
                  });
                }
              }}
            />
            <CalendarOutlined
              className="add-icon"
              style={{ color: "green", fontSize: 20 }}
              onClick={() =>
                navigate(
                  `/admin/movie-management/showtime-management/add/${text.maPhim}`
                )
              }
            />
          </div>
        );
      },
    },
  ];
  const onSearch = (value) => console.log(value);
  return (
    <div>
      <h2>Quản lý phim</h2>
      <Button
        onClick={() => navigate("/admin/movie-management/add")}
        className="mb-4"
      >
        THÊM PHIM
      </Button>
      <Search
        className="mb-3"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={movieList} />
    </div>
  );
}
