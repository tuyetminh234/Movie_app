import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { upDateProfileApi } from "services/user";

export default function AccountInfo(props) {
  const [form, setForm] = useState();
  // const [updateProfile, setUpdateProfile] = useState()
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (props.data) {
      setForm(props.data);
    }
  }, [props.data]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setForm({
      ...form,
      [name]: value,
    });
  };

  //   useEffect(() => {
  //     getUpdateProfileApi()
  // },[])

  const getUpdateProfileApi = async (event) => {
    event.preventDefault();
    try {
    const result = await upDateProfileApi(form);
      console.log(result);
      navigate("/")
      alert("Cập nhật thành công")
      
    } catch (error) {
      console.log(error);
    }
    
  };
  return (
    <div className="account-info">
      <h1>Cài đặt tài khoản chung</h1>
      <p>Thông tin có thể được thay đổi</p>
      <hr />
      <form className="form-account">
        <div className="form-content">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Tài khoản</label>
                <input
                  disabled
                  required
                  title="Tài khoản"
                  name="taiKhoan"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  defaultValue={form?.taiKhoan}
                />
                <span className="text-danger"></span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Mật khẩu</label>
                <input
                  required
                  title="mật khẩu"
                  name="matKhau"
                  minLength={5}
                  maxLength={10}
                  type="text"
                  className="form-control"
                  defaultValue={form?.matKhau}
                  onChange={handleChange}
                />
                <span className="text-danger"></span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Họ tên</label>
                <input
                  required
                  title="họ tên"
                  name="hoTen"
                  type="text"
                  className="form-control"
                  defaultValue={form?.hoTen}
                  onChange={handleChange}
                />
                <span className="text-danger"></span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Email</label>
                <input
                  required
                  title="email"
                  name="email"
                  type="text"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="form-control"
                  defaultValue={form?.email}
                  onChange={handleChange}
                />
                <span className="text-danger"></span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Số điện thoại</label>
                <input
                  required
                  title="số điện thoại"
                  name="soDt"
                  type="text"
                  className="form-control"
                  defaultValue={form?.soDt}
                  onChange={handleChange}
                />
                <span className="text-danger"></span>
              </div>
            </div>
          </div>
          <hr />
          <button
            onClick={getUpdateProfileApi}
            type="submit"
            // disabled={!formRef.current?.checkValidity()}
            className="update btn btn-warning mr-2"
          >
            CẬP NHẬT
          </button>
        </div>
      </form>
    </div>
  );
}
