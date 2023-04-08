import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserInfoAction } from "../../store/actions/userAction";
import "./header.scss";

export default function Header() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("USER_INFO_KEY");
    dispatch(setUserInfoAction(null));
    navigate("/");
  };

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg  ">
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="left-content collapse navbar-collapse" id="collapsibleNavId">
        
              <div className="logo-content">
                <img src="https://www.pinclipart.com/picdir/big/568-5683457_galaxy-png-transparent-galaxy-logo-png-clipart.png" className="logo-img"/>
                <span className="logo-branch">GAGACE</span>
                
              </div>
          
          <div>
          <ul className="header-ul ml-auto">
            
          
            <li>
              <a className="navbar-brand active">
                <NavLink to="/">TRANG CHỦ</NavLink>
              </a>
            </li>

            <li>
              <a className="navbar-brand" href="#movieList">
                {" "}
                XEM PHIM{" "}
              </a>
            </li>
            <li>
              <a className="navbar-brand" href="#theater">
                {" "}
                CỤM RẠP{" "}
              </a>
            </li>
            <li>
              <a className="navbar-brand" href="#news">
                {" "}
                TIN TỨC{" "}
              </a>
            </li>
          </ul>
</div>
          
        </div>
      </nav>
      <div className="header-right ml-auto ">
        {userState.userInfo ? (
          <>
            <a className="account-name" href="/account/:user">
              <span className="mr-3">Hello {userState.userInfo.hoTen}</span>
            </a>
            <button className="btn btn-danger" onClick={handleLogout}>
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/register")}
              className="btn btn-outline-success my-2 my-sm-0 mr-2"
              type="sumit"
            >
              Đăng ký
            </button>
            <button
              onClick={() => navigate("/login")}
              className="login btn btn-outline-primary my-2 my-sm-0"
            >
              Đăng nhập
            </button>
          </>
        )}
      </div>
    </div>
  );





  // return (
  // <div classname="header">
  //   <nav className="navbarGanaxi navbar navbar-expand-md">
  //     <h5 className="logo-top">
  //       <span>
  //         <img src className="logo-top" />
  //       </span>
  //       <b className="logo-name text-dark">Gana
  //         <span className="text-muted font-italic">
  //           Xi
  //         </span>
  //       </b>
  //     </h5>
  //     <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
  //     <div className="navbar-collapse collapse" id="navbarNav" style={{alignItems: 'center'}}>
  //       <ul className="navbar-nav ml-auto mt-2 mt-lg-0 text-center">
  //         <li className="nav-item active li" data-toggle="collapse" data-target=".navbar-collapse.show">
  //           <a className="active prl nav-link" href="/">Trang chủ</a></li>
  //         <li className="nav-item li" data-toggle="collapse" data-target=".navbar-collapse.show"><a href="#phim" className="prl nav-link" to="/">Phim</a></li>
  //         <li className="nav-item li" data-toggle="collapse" data-target=".navbar-collapse.show"><a href="#tintuc" className="prl nav-link">Tin Tức</a></li>
  //         <li className="nav-item li" data-toggle="collapse" data-target=".navbar-collapse.show"><a href="#sukien" className="prl nav-link">Sự Kiện</a></li>
  //       </ul>
  //       <div className="header-right ml-auto ">
  //       {userState.userInfo ? (
  //         <>
  //           <a className="account-name" href="/account/:user">
  //             <span className="mr-3">Hello {userState.userInfo.hoTen}</span>
  //           </a>
  //           <button className="btn btn-danger" onClick={handleLogout}>
  //             Đăng xuất
  //           </button>
  //         </>
  //       ) : (
  //         <>
  //           <button
  //             onClick={() => navigate("/register")}
  //             className="btn btn-outline-success my-2 my-sm-0 mr-2"
  //             type="sumit"
  //           >
  //             Đăng ký
  //           </button>
  //           <button
  //             onClick={() => navigate("/login")}
  //             className="btn btn-outline-primary my-2 my-sm-0"
  //           >
  //             Đăng nhập
  //           </button>
  //         </>
  //       )}
  //     </div>
  //     </div>
  //   </nav>
  // </div>
  // )




}



