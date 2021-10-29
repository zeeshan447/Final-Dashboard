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

const JobDepartmentSelect = ({ jobDepartment, jobDepartmentCallback }) => {
  const [getDepartment, setDepartment] = useState([]);
  let responseData = [];

  useEffect(() => {
    getData();
    console.log("DEPARTMENT CALLBACK", jobDepartmentCallback);
  }, []);

  function handleChange(value, name) {
    console.log(`selected ${value}`);
    jobDepartment(value);
  }

  const getData = async () => {
    await Axios.get("https://peoplexdevapi.packagex.xyz/department").then(
      (response) => {
        responseData = response.data.data.map((row, key) => ({
          key: row.department_id,
          department_name: row.department_name,
        }));
      }
    );

    setDepartment(responseData);

    // console.log("response", state);
    // const response = await axios.get("https://peoplexdevapi.packagex.xyz/department");
    // setState(response?.data?.data);
  };
  return (
    <JobPostingSelect
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
      {getDepartment?.map((data, key) => {
        return (
          <Option value={data.key} name={data.department_name}>
            {data.department_name}
          </Option>
        );
      })}
    </JobPostingSelect>
  );
};

export default JobDepartmentSelect;
