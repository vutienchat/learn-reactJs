import React from "react";
import { BookOutlined, DeleteOutlined } from "@ant-design/icons";
import { Image, Popconfirm, Table } from "antd";
import { EditOutlined } from "@ant-design/icons";
const Content = ({ dataUser, onDelete, setType, onEdit, loading }) => {
  const handleEditUser = (user) => {
    onEdit(user);
    setType("EDIT");
  };
  const columns = [
    {
      title: () => <div className="tw-text-[#318db1]">STT</div>,
      dataIndex: "key",
    },
    {
      title: () => <div className="tw-text-[#318db1]">Họ Tên</div>,
      dataIndex: "name",
      render: (name) => <div className="tw-text-[#318db1]">{name}</div>,
      width: "15%",
    },
    {
      title: () => <div className="tw-text-[#318db1]">Hình ảnh</div>,
      dataIndex: "image",
      render: (image) => (
        <div>
          <Image
            className="tw-rounded-full !tw-w-20 !tw-h-20 tw-object-cover"
            src={image}
          />
        </div>
      ),
    },
    {
      title: () => <div className="tw-text-[#318db1]">Tuổi</div>,
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: () => <div className="tw-text-[#318db1]">SĐT</div>,
      dataIndex: "phone",
    },
    {
      title: () => <div className="tw-text-[#318db1]">Địa chỉ</div>,
      dataIndex: "address",
      render: (address) => <div className="tw-text-[#318db1]">{address}</div>,
      filters: [
        {
          text: <span>London</span>,
          value: "London",
        },
        {
          text: <span>New York</span>,
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "25%",
    },
    {
      title: () => <div className="tw-text-[#318db1]">Email</div>,
      dataIndex: "email",
    },
    {
      title: "Hành động",
      render: (user, r) => (
        <div className="tw-flex tw-justify-center tw-w-20">
          <div className="tw-bg-[#efac4d] tw-flex tw-justify-center tw-items-center tw-text-white tw-p-1.5 tw-rounded-md tw-mr-2">
            <EditOutlined
              onClick={() => {
                handleEditUser(user);
              }}
            />
          </div>
          <div className="tw-bg-[#d8524e] tw-flex tw-justify-center tw-items-center tw-text-white tw-p-1.5 tw-rounded-md tw-ml-2">
            <Popconfirm
              title="Bạn có chắc chắn muốn xóa không?"
              onConfirm={() => onDelete(user.key)}
              okText="Yes"
              cancelText="No"
            >
              <DeleteOutlined />
            </Popconfirm>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="tw-flex tw-items-center tw-text-[#ababab] tw-font-semibold tw-pb-2 tw-pt-5">
        <BookOutlined />
        <div className="tw-pl-2 ">Danh sách thành viên</div>
      </div>
      <Table
        columns={columns}
        pagination={false}
        dataSource={dataUser}
        loading={loading}
      />
    </>
  );
};

export default Content;
