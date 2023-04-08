import React from "react";
import { Button, notification, Table } from "antd";
import { Input, Space } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useUserList } from "hooks/useUserList";
import { useNavigate } from "react-router-dom";
import { deleteUserApi } from "services/userManagement";
const { Search } = Input;

export default function UserManagement() {
  const userList = useUserList();
  const navigate = useNavigate();

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "1",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "2",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "3",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
      key: "4",
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      key: "5",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "5",
    },

    {
      title: "Hành động",
      key: "7",
      render: (text) => {
        return (
          <div style={{ display: "flex" }}>
            <EditOutlined
              style={{ color: "blue", fontSize: 20, marginRight: 3 }}
              onClick={() =>
                navigate(`/admin/user-management/edit/${text.taiKhoan}`)
              }
            />
            <DeleteOutlined
              style={{ color: "red", fontSize: 20, marginRight: 3 }}
              onClick={async () => {
                try {
                  if (window.confirm("Bạn xác nhận muốn xóa user này")) {
                    await deleteUserApi(text.taiKhoan);
                    notification.success({
                      message: "Xóa người dùng thành công",
                    });
                  }
                } catch (error) {
                  notification.error({
                    message: error.response.data.content,
                  });
                }
              }}
            />
          </div>
        );
      },
    },
  ];

  const onSearch = (value) => console.log(value);
  return (
    <div>
      <h2>Quản lý người dùng</h2>
      <Button
        onClick={() => navigate("/admin/user-management/add")}
        className="mb-4"
      >
        THÊM NGƯỜI DÙNG
      </Button>
      <Search
        className="mb-3"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={userList} />
    </div>
  );
}
