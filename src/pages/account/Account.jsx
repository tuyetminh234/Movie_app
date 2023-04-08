import React from "react";
import "./account.scss";
import AccountInfo from "./components/account-Info/AccountInfo";
import History from "./components/history/History";
import { useEffect, useState } from "react";
import { getProfileApi } from "../../services/user";
import { useParams } from "react-router-dom";


export default function Account() {
  const { user } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
   
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const result = await getProfileApi(user);
      const data = {
        ...{},
        taiKhoan: result.data.content.taiKhoan,
        matKhau: result.data.content.matKhau,
        email: result.data.content.email,
        soDt: result.data.content.soDT,
        maNhom: result.data.content.maNhom,
        maLoaiNguoiDung: result.data.content.maLoaiNguoiDung,
        hoTen: result.data.content.hoTen,
      };
      console.log("data", data)
      setData(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="account">
      <div className="account-content">
        <AccountInfo data={data} />

        <History />
      </div>
    </div>
  );
}
