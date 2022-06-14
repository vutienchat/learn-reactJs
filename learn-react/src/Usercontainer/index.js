import React, { useRef, useState } from "react";
import Content from "../Components/Content";
import Header from "../Components/Header";
import { Card, notification } from "antd";
import { DribbbleOutlined } from "@ant-design/icons";
import { Users } from "../dataUser";
import MyModal from "../Components/MyModal";
const UserPage = () => {
  const RefUser = useRef(Users);
  const [dataUser, setDataUser] = useState(Users);
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
    image: "",
  });
  const handleAdd = (newUser) => {
    setDataUser([...dataUser, newUser]);
    notification.success({ message: `Thêm thành công !!!` });
  };
  const handleEditSubmit = (newUser) => {
    const newUsers = dataUser.map((user) =>
      user.key === newUser.key ? newUser : user
    );
    setDataUser(newUsers);
    notification.success({ message: `Sửa thành công !!!` });
  };
  const onDelete = (id) => {
    const newUsers = dataUser.filter((user) => user.key !== id);
    setDataUser(newUsers);
    notification.success({ message: `Xóa thành công !!!` });
  };
  const handleEdit = (value) => {
    setUser(value);
  };
  const fecthApiSearch = (search) => {
    setLoading(true);
    const dataSearch = RefUser.current.filter((user) =>
      user.name.toUpperCase().match(search.toUpperCase())
    );
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataSearch);
        setLoading(false);
      }, 1000);
    });
  };
  const handleSearch = (search) => {
    fecthApiSearch(search).then((value) => {
      setDataUser(value);
    });
  };

  return (
    <Card
      title={
        <h2 className="tw-text-[#318db1] tw-font-bold tw-text-lg">
          Danh sách thành viên
        </h2>
      }
      extra={
        <DribbbleOutlined className="!tw-text-[#318db1] tw-font-black tw-text-2xl app-logo " />
      }
      type="inner"
    >
      <Header loading={loading} setType={setType} onSearch={handleSearch} />
      <Content
        loading={loading}
        dataUser={dataUser}
        onDelete={onDelete}
        onEdit={handleEdit}
        setType={setType}
      />
      <MyModal
        user={user}
        setUser={setUser}
        setType={setType}
        type={type}
        handleAdd={handleAdd}
        handleEditSubmit={handleEditSubmit}
      />
    </Card>
  );
};

export default UserPage;
