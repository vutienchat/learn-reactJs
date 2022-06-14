import { Button, Input } from "antd";
// import { useDebouncedCallback } from "use-debounce";
import React from "react";
// import { SearchOutlined } from "@ant-design/icons";
const Header = ({ setType, onSearch, loading }) => {
  const onSearchInput = (value) => {
    onSearch(value);
  };
  const handleAdd = () => {
    setType("ADD");
  };
  return (
    <div className="tw-bg-[#fafafa] tw-p-4 ">
      <div className="tw-flex tw-justify-between">
        {/* <Input
          placeholder="Tìm theo họ và tên"
          style={{ width: 200 }}
          type="search"
          suffix={
            <SearchOutlined className="tw-text-gray-400 tw-text-md tw-font-medium" />
          }
          onChange={onSearchInput}
        /> */}
        <Input.Search
          style={{ width: 200 }}
          onSearch={onSearchInput}
          loading={loading}
        />

        <Button
          type="primary"
          style={{ background: "#318db1", border: "none" }}
          onClick={handleAdd}
        >
          Thêm mới
        </Button>
      </div>
      <div className="tw-pt-4 tw-text-xs tw-text-left tw-font-medium">
        Từ khóa tìm kiếm không lớn hơn 64 ký tự,không dùng mã HTML
      </div>
    </div>
  );
};

export default Header;
