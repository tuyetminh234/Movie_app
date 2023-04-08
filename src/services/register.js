import { axiosRequest } from "configs/axios.config"

export const registerApi = (information) => {
    return axiosRequest({
        url: `/QuanLyNguoiDung/DangKy`,
        method: "POST",
        data: information, 
    })
}

