import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

const ButtonInputSearch = () => {
  return (
    <div>
      <Input placeholder="Basic usage" />
      <Button size="large" icon={<SearchOutlined />}>
        Tìm kiếm
      </Button>
    </div>
  );
};

export default ButtonInputSearch;
