import React from "react";
import "./footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-bg-layer">
        <div className="container">
          <div className="row footer-top">
            <div className="col-lg-6 col-md-5 footer-list mt-5">
              <h6 className="footer-title">Thông tin liên hệ </h6>
              <ul>
                <li>
                  <p>
                    <strong>Địa chỉ</strong>: #135 block, Barnard St. Brooklyn,
                    London 10036, UK
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Phone</strong>:
                    <a href="tel:+(12)234-11-24">19006017</a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Email</strong>:
                    <a href="mailto: example@mail.com "> hoidap@ggc.vn</a>
                  </p>
                </li>
              </ul>
              <div className="social-footer mt-3">
                <ul className="social-icon">
                  <li className="facebook">
                    <a href="#link" title="Facebook">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="#link" title="Twitter">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li className="dribbble">
                    <a href="#link" title="Dribbble">
                      <i className="fa-brands fa-dribbble" />
                    </a>
                  </li>
                  <li className="google">
                    <a href="#link" title="Google">
                      <i className="fa-brands fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="row">
                <div className="col-sm-4 col-6 footer-list mt-5">
                  <h6 className="footer-title">GGC Việt Nam</h6>
                  <ul>
                    <li>
                      <a href="about.html">Giới thiệu</a>
                    </li>
                    <li>
                      <a href="blog.html">Tiện ích online</a>
                    </li>
                    <li>
                      <a href="services.html">Thẻ quà tặng</a>
                    </li>
                    <li>
                      <a href="#pricing">Tuyển dụng</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 col-6 footer-list mt-5">
                  <h6 className="footer-title">Điều khoản sử dụng</h6>
                  <ul>
                    <li>
                      <a href="contact.html">Điều khoản chung</a>
                    </li>
                    <li>
                      <a href="#signup">Chính sách giao dịch</a>
                    </li>
                    <li>
                      <a href="#learn">Chính sách thanh toán</a>
                    </li>
                    <li>
                      <a href="#feedback">Chính sách bảo mật</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 footer-list mt-5">
                  <h6 className="footer-title">Thông tin phim</h6>
                  <ul>
                    <li>
                      <a href="#URL">Phim đang chiếu</a>
                    </li>
                    <li>
                      <a href="#URL">Phim sắp chiếu</a>
                    </li>
                    <li>
                      <a href="#URL">Suất đặc biệt</a>
                    </li>
                    <li>
                      <a href="#URL">Khuyến mãi</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="midd-footer align-center py-lg-4 py-3 mt-5">
          <div className="container">
            <p className="copy-footer text-center">
              COPYRIGHT 2017 CJ ggc. All RIGHTS RESERVED.
              <a href="https://www.cgv.vn/home/">GGC</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
