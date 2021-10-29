import React, { useState, useEffect } from "react";
import { JobPostingSelect } from "./joblocationselect.style";
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

const JobPostingOwnerSelect = ({ ownerSelect }) => {
  const [getLocation, setLocation] = useState([]);
  let responseData = [];

  useEffect(() => {
    getData();
  }, []);

  function handleChange(value) {
    console.log(`selected ${value}`);
    ownerSelect(value);
  }

  const getData = async () => {
    await Axios.get("https://peoplexdev.packagex.xyz/posted/job_owner").then(
      (response) => {
        responseData = response.data.data.map((row, key) => ({
          key: row.user_id,
          loc_name: row.user_name,
        }));
      }
    );

    setLocation(responseData);

    // console.log("response", state);
    // const response = await axios.get("https://peoplexdev.packagex.xyz/department");
    // setState(response?.data?.data);
  };
  return (
    <JobPostingSelect
      optionFilterProp="children"
      placeholder="Select Job Owner"
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {getLocation?.map((data, key) => {
        return <Option value={data.loc_name}>{data.loc_name}</Option>;
      })}
    </JobPostingSelect>
  );
};

export default JobPostingOwnerSelect;
