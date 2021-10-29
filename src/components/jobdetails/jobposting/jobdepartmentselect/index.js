import React, { useState, useEffect } from "react";
import { JobPostingSelect } from "./jobdepartmentselect.style";
import Axios from "axios";
const { Option } = JobPostingSelect;

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

const JobDepartmentSelect = ({ departmentSelect, departmentDetail }) => {
  const [getDepartment, setDepartment] = useState([]);
  let responseData = [];

  useEffect(() => {
    getData();
  });

  function handleChange(value) {
    console.log(`selected ${value}`);
    departmentSelect(value);
  }

  const getData = async () => {
    await Axios.get("https://peoplexdev.packagex.xyz/department").then(
      (response) => {
        responseData = response.data.data.map((row, key) => ({
          key: row.department_id,
          department_name: row.department_name,
        }));
      }
    );

    setDepartment(responseData);

    // console.log("response", state);
    // const response = await axios.get("https://peoplexdev.packagex.xyz/department");
    // setState(response?.data?.data);
  };
  return (
    <JobPostingSelect
      placeholder="Select Department"
      defaultValue={departmentDetail.departmentName}
      optionFilterProp="children"
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {getDepartment?.map((data, key) => {
        return <Option value={data.key}>{data.department_name}</Option>;
      })}
    </JobPostingSelect>
  );
};

export default JobDepartmentSelect;
