import React, { useEffect } from "react";
import {
  Button,
  DatePicker,
  Form,
  Image,
  Input,
  InputNumber,
  message,
  notification,
  Select,
} from "antd";
import { useState } from "react";
import { fetchMovieDetailApi } from "services/movie";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCinemaGroupApi, fetchCinemaListApi } from "services/cinema";
import { addMovieShowtimeApi } from "services/showtime";
import { useForm } from "antd/es/form/Form";

export default function ShowtimeManagement() {
  const [movieDetail, setMovieDetail] = useState({});
  const [state, setState] = useState({
    heThongRap: [],
    cumRap: [],
  });
  const params = useParams();
  const [form] = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetail();
    getCinemaList();
  }, []);

  // Call Api để lấy hình ảnh phim
  const getMovieDetail = async () => {
    const result = await fetchMovieDetailApi(params.id);
    setMovieDetail(result.data.content);
  };

  // Call Api để lấy Danh sách hệ thống rạp
  const getCinemaList = async () => {
    try {
      const result = await fetchCinemaListApi();
      setState({
        ...state,
        heThongRap: result.data.content,
      });
    } catch (error) {
      notification.error({
        message: error.response.data.content,
      });
    }
  };

  // Call Api để lấy Danh sách cụm rạp
  const getCinemaGroup = async (value) => {
    try {
      const result = await fetchCinemaGroupApi(value);
      setState({
        ...state,
        cumRap: result.data.content,
      });
    } catch (error) {
      notification.error({
        message: error.response.data.content,
      });
    }
  };

  // *Khi select hệ thống rạp sẽ gọi ra cụm rạp*
  const handleChangeCinemaList = async (value) => {
    await getCinemaGroup(value);
  };

  const renderCinemaList = () => {
    return state.heThongRap?.map(({ maHeThongRap, tenHeThongRap }, idx) => {
      return (
        <Select.Option key={idx} value={maHeThongRap}>
          {tenHeThongRap}
        </Select.Option>
      );
    });
  };

  const renderCinemaGroup = () => {
    return state.cumRap?.map(({ maCumRap, tenCumRap }, idx) => {
      return (
        <Select.Option key={idx} value={maCumRap}>
          {tenCumRap}
        </Select.Option>
      );
    });
  };

  const handleFinish = async (values) => {
    values.ngayChieuGioChieu = values.ngayChieuGioChieu.format(
      "DD/MM/YYYY hh:mm:ss"
    );

    const data = {
      maPhim: params.id,
      maRap: values.maCumRapChieu,
      ngayChieuGioChieu: values.ngayChieuGioChieu,
      giaVe: values.giaVe,
    };
    try {
      await addMovieShowtimeApi(data);
      notification.success({
        message: "Tạo lịch chiếu thành công.",
      });
      navigate("/admin/movie-management");
    } catch (error) {
      notification.error({
        message: error.response.data.content,
      });
    }
  };

  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="row" style={{ display: "flex" }}>
      <div className="col-4" style={{ textAlign: "center" }}>
        <Image width={200} src={movieDetail.hinhAnh} />
      </div>
      <div className="col-8">
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
            tenRap: "",
            maCumRapChieu: "",
            ngayChieuGioChieu: "",
            giaVe: "",
          }}
          onFinish={handleFinish}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            label="Hệ thống rạp"
            name="tenRap"
            rules={[{ required: true, message: "Vui lòng chọn hệ thống rạp" }]}
          >
            <Select
              placeholder="Chọn hệ thống rạp"
              onChange={handleChangeCinemaList}
            >
              {renderCinemaList()}
            </Select>
          </Form.Item>
          <Form.Item
            label="Cụm rạp"
            name="maCumRapChieu"
            rules={[{ required: true, message: "Vui lòng chọn cụm rạp" }]}
          >
            <Select placeholder="Chọn cụm rạp">{renderCinemaGroup()}</Select>
          </Form.Item>
          <Form.Item
            label="Ngày khởi chiếu"
            name="ngayChieuGioChieu"
            rules={[
              { required: true, message: "Vui lòng chọn ngày chiếu giờ chiếu" },
            ]}
          >
            <DatePicker showTime />
          </Form.Item>
          <Form.Item
            label="Giá vé"
            name="giaVe"
            rules={[{ required: true, message: "Giá vé không được để trống" }]}
          >
            <InputNumber min={80000} max={200000} />
          </Form.Item>
          <Form.Item label="Chức năng">
            <Button htmlType="submit">Tạo lịch chiếu</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}