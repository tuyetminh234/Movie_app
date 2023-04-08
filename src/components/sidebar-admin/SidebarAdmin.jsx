import React from "react";
import { useNavigate } from "react-router-dom";
import "./sidebarAdmin.scss";

export default function SidebarAdmin() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div
        className="sidebar-top logo-sidebar"
        onClick={() => navigate("/")}
      >
        Gagace Cinema
      </div>
      <div className="sidebar-center">
        <ul className="list">
          <li
            className="list-item"
            onClick={() => navigate("/admin/user-management")}
          >
            <i class="list-item-icon fa-regular fa-user"></i>
            <span className="list-item-text">User</span>
          </li>
          <li
            className="list-item"
            onClick={() => navigate("/admin/movie-management")}
          >
            <i class="list-item-icon fa-regular fa-file"></i>
            <span className="list-item-text">Movie</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
