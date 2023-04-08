const { axiosRequest } = require("configs/axios.config")

export const addMovieShowtimeApi = (imformation) => {
    return axiosRequest({
        url: `/QuanLyDatVe/TaoLichChieu`,
        method: "POST",
        data: imformation,
    })
}