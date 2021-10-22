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

const JobLocationSelect = ({ locationSelect }) => {
  const [getLocation, setLocation] = useState([]);
  let responseData = [];

  useEffect(() => {
    getData();
  });

  function handleChange(value) {
    console.log(`selected ${value}`);
    locationSelect(value);
  }

  const getData = async () => {
    await Axios.get("http://localhost:2500/company-loc").then((response) => {
      responseData = response.data.locations.map((row, key) => ({
        key: row.loc_id,
        loc_name: row.loc_name,
      }));
    });

    setLocation(responseData);

    // console.log("response", state);
    // const response = await axios.get("http://localhost:2500/department");
    // setState(response?.data?.data);
  };
  return (
    <JobPostingSelect
      optionFilterProp="children"
      placeholder="Select Location"
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

export default JobLocationSelect;
