import React, { useEffect, useState } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Select } from "antd";

const { Option } = Select;

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

const AntSelect = (props) => {
  const [state, setState] = useState([]);
  let responseData = [];

  useEffect(() => {
    getData();
  });

  function handleChange(value) {
    console.log(`selected ${value}`);
    props.onChange(value);
  }

  const getData = async () => {
    await axios.get("http://localhost:2500/department").then((response) => {
      responseData = response.data.data.map((row, key) => ({
        key: row.department_id,
        department_name: row.department_name,
      }));
    });

    setState(responseData);

    // console.log("response", state);
    // const response = await axios.get("http://localhost:2500/department");
    // setState(response?.data?.data);
  };

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select Department"
      optionFilterProp="children"
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {state.map((data, key) => {
        return <Option value={data.key}>{data.department_name}</Option>;
      })}
    </Select>
  );
};

export default AntSelect;
