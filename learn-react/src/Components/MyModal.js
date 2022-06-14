import React, { useEffect, useState } from "react";
import { Input, Modal, Form, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const MyModal = ({ type, setType, handleAdd, user, handleEditSubmit }) => {
  const [defaultListOfFiles, setDefaultListOfFiles] = useState([]);
  const [form] = Form.useForm();
  const handleChange = ({ fileList: newFileList }) =>
    setDefaultListOfFiles(newFileList);
  const onOk = () => {
    form.validateFields().then((values) => {
      const linkImg = values.image
        ? URL.createObjectURL(values.image.file)
        : user.image;
      if (type === "ADD") {
        handleAdd({
          key: Math.floor(Math.random() * 10000),
          ...values,
          image: linkImg,
        });
      } else if (type === "EDIT") {
        handleEditSubmit({ key: user.key, ...values, image: linkImg });
      }
      setType("");
      form.resetFields();
    });
  };
  useEffect(() => {
    if (type === "EDIT") {
      form.setFieldsValue({
        name: user?.name,
        age: user?.age,
        phone: user?.phone,
        address: user?.address,
        email: user?.email,
      });
      setDefaultListOfFiles([
        {
          uid: "-1",
          name: `Ảnh ${user.name}`,
          status: "done",
          url: `${user.image}`,
        },
      ]);
    } else if (type === "ADD") {
      setDefaultListOfFiles([]);
      form.setFieldsValue({
        name: "",
        age: "",
        phone: "",
        address: "",
        email: "",
        image: "",
      });
    }
  }, [type, user, form]);
  return (
    <Modal
      title={type === "ADD" ? "THÊM THÀNH VIÊN" : "SỬA THÀNH VIÊN"}
      visible={type ? true : false}
      onOk={onOk}
      onCancel={() => setType("")}
      okText={type === "ADD" ? "Thêm" : "Sửa"}
      cancelText="Hủy"
    >
      <Form form={form} layout="vertical">
        <div className="tw-grid tw-grid-cols-2 tw-gap-4">
          <Form.Item
            label="Họ tên"
            name="name"
            rules={[
              {
                required: true,
                message: "Hãy nhập họ tên",
              },
            ]}
          >
            <Input placeholder="Vu Van A" />
          </Form.Item>
          <Form.Item
            label="Tuổi"
            name="age"
            rules={[
              {
                required: true,
                message: "Hãy nhập tuổi",
              },
            ]}
          >
            <Input placeholder="20" />
          </Form.Item>
          <Form.Item
            label="SĐT"
            name="phone"
            rules={[
              {
                required: true,
                message: "Hãy nhập SĐT",
              },
            ]}
          >
            <Input placeholder="03212345**" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Hãy nhập Email",
              },
            ]}
          >
            <Input placeholder="vuvana@gmail.com" />
          </Form.Item>
          <Form.Item
            label="Địa Chỉ"
            // className="tw-col-span-2"
            name="address"
            rules={[
              {
                required: true,
                message: "Hãy nhập địa chỉ",
              },
            ]}
          >
            <Input placeholder="Hà Nội" />
          </Form.Item>
          <Form.Item
            label="Hình ảnh"
            name="image"
            valuePropName="file"
            // rules={[
            //   {
            //     required: true,
            //     message: "Hãy chọn hình ảnh",
            //   },
            // ]}
          >
            <Upload
              name="logo"
              fileList={defaultListOfFiles}
              action={""}
              accept="image/*"
              listType="picture"
              maxCount={1}
              onChange={handleChange}
              beforeUpload={() => {
                return false;
              }}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default MyModal;
