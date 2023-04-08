import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerApi } from "services/register";
import { registerInfoAction } from "store/actions/registerAction";
import "./register.scss";
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    hoTen: "",
  });

  const [errors, setErrors] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    hoTen: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await registerApi(register);
    localStorage.getItem(
      "REGISTER_INFO_KEY",
      JSON.stringify(result.data.content)
    );
    dispatch(registerInfoAction(result.data.content));
    navigate("/login");
    console.log(result.data.content);
    alert("Đăng kí thành công");
  };

  const handleBlur = (event) => {
    let message = "";
    const { validationMessage, name, validity, title, minLength, maxLength } =
      event.target;
    const { valueMissing, tooShort, tooLong, patternMismatch } = validity;

    if (valueMissing) {
      message = `Yêu cầu nhập ${title}.`;
    }

    if (tooShort || tooLong) {
      message = `${title} từ ${minLength}-${maxLength} kí tự`;
    }

    if (patternMismatch) {
      message = `${title} không đúng định dạng`;
    }

    setErrors({
      ...errors,
      [name]: message,
    });
  };

  return (
    <>
      <div className=" register card-body">
        <h1>ĐĂNG KÝ</h1>
        <p>Điền thông tin thành viên</p>
        <hr />
        <form noValidate onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Tài khoản</label>
                <input
                  onChange={handleChange}
                  required
                  title="Tài khoản"
                  onBlur={handleBlur}
                  name="taiKhoan"
                  type="text"
                  className="form-control"
                />
                <span className="text-danger">{errors.taiKhoan}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Mật khẩu</label>
                <input
                  onChange={handleChange}
                  required
                  onBlur={handleBlur}
                  title="mật khẩu"
                  name="matKhau"
                  minLength={5}
                  maxLength={10}
                  type="text"
                  className="form-control"
                />
                <span className="text-danger">{errors.matKhau}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Họ tên</label>
                <input
                  onChange={handleChange}
                  required
                  onBlur={handleBlur}
                  title="họ tên"
                  name="hoTen"
                  type="text"
                  className="form-control"
                />
                <span className="text-danger">{errors.hoTen}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Email</label>
                <input
                  onChange={handleChange}
                  required
                  onBlur={handleBlur}
                  title="email"
                  name="email"
                  type="text"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="form-control"
                />
                <span className="text-danger">{errors.email}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Số điện thoại</label>
                <input
                  onChange={handleChange}
                  required
                  onBlur={handleBlur}
                  title="số điện thoại"
                  name="soDt"
                  type="text"
                  className="form-control"
                />
                <span className="text-danger">{errors.soDt}</span>
              </div>
            </div>
          </div>
          <hr />
          <button className="btn btn-warning mr-2">Đăng ký</button>
          <button
            onClick={() => navigate("/login")}
            className="btn btn-outline-primary"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </>
  );
}
