import { axiosRequest } from "configs/axios.config";
import { GROUP_ID } from "constants";

export const fetchTheaterSystemApi = () => {
  return axiosRequest({
      url: `/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`,
      method: "GET",
      
    })
}


