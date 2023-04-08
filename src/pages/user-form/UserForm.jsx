import React, { useEffect } from "react";
import { Button, Form, Input, notification, Radio, Select } from "antd";
import { useState } from "react";
import { GROUP_ID } from "constants";
import {
  addUserApi,
  editUserApi,
  fetchUserApi,
  fetchUserTypeApi,
} from "services/userManagement";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";

export default function UserForm() {
  const [userType, setUserType] = useState([]);
  const [form] = useForm();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getTypeUser();
  }, []);

  useEffect(() => {
    if (params.userId) {
      getUserInfor();
    }
  }, [params.userId]);

  // Lấy thông tin user đổ vào form để cập nhật
  const getUserInfor = async () => {
    const result = await fetchUserApi(params.userId);
    console.log(result);

    form.setFieldsValue({
      hoTen: result.data.content.hoTen,
      taiKhoan: result.data.content.taiKhoan,
      matKhau: result.data.content.matKhau,
      email: result.data.content.email,
      soDt: result.data.content.soDT,
      maLoaiNguoiDung: result.data.content.maLoaiNguoiDung,
    });
  };

  //   Call Api lấy loại người dùng
  const getTypeUser = async () => {
    const result = await fetchUserTypeApi();
    setUserType(result.data.content);
  };

  const renderTypeUser = () => {
    return userType.map(({ maLoaiNguoiDung, tenLoai }, idx) => {
      return (
        <Select.Option key={idx} value={maLoaiNguoiDung}>
          {tenLoai}
        </Select.Option>
      );
    });
  };

  const handleFinish = async (values) => {
    console.log(values);
    const data = {
      hoTen: values.hoTen,
      taiKhoan: values.taiKhoan,
      matKhau: values.matKhau,
      email: values.email,
      soDt: values.soDt,
      maLoaiNguoiDung: values.maLoaiNguoiDung,
      maNhom: GROUP_ID,
    };

    if (params.userId) {
      await editUserApi(data);
    } else {
      await addUserApi(data);
    }

    notification.success({
      message: params.userId
        ? "Cập nhật người dùng thành công"
        : "Thêm người dùng thành công",
    });
    navigate("/admin/user-management");
  };

  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      form={form}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
        hoTen: "",
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maLoaiNguoiDung: "",
      }}
      onFinish={handleFinish}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Họ tên"
        name="hoTen"
        rules={[
          { required: true, message: "Họ tên không được để trống" },
          { min: 5, message: "Họ tên phải từ 5 ký tự" },
          { max: 20, message: "Họ tên phải nhỏ hơn hoặc bằng 20 ký tự" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Tài khoản"
        name="taiKhoan"
        rules={[{ required: true, message: "Tài khoản không được để trống" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mật khẩu"
        name="matKhau"
        rules={[{ required: true, message: "Mật khẩu không được để trống" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Email không được để trống" },
          {
            pattern: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
            message: "Email phải đúng định dạng",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Số điện thoại"
        name="soDt"
        rules={[{ required: true, message: "SĐT không được để trống" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Loại người dùng"
        name="maLoaiNguoiDung"
        rules={[{ required: true, message: "Vui lòng chọn loại người dùng" }]}
      >
        <Select>{renderTypeUser()}</Select>
      </Form.Item>
      <Form.Item label="Tác vụ">
        {params.userId ? (
          <>
            <Button htmlType="submit">CẬP NHẬT</Button>
          </>
        ) : (
          <>
            <Button htmlType="submit">LƯU</Button>
          </>
        )}
      </Form.Item>
    </Form>
  );
}
