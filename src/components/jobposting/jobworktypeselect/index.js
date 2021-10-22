import React, { useState, useEffect } from "react";
import { JobPostingSelect } from "./jobworkstypeselect.style";
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

const JobWorkTypeSelect = ({ workTypeSelect }) => {
  const [getWorkType, setWorkType] = useState([]);
  let responseData = [];

  useEffect(() => {
    getData();
    const response = Axios.get("http://localhost:2500/work-type");
    console.log("ajlksdjsad", response);
  }, []);

  function handleChange(value) {
    console.log(`selected ${value}`);
    workTypeSelect(value);
  }

  const getData = async () => {
    await Axios.get("http://localhost:2500/work-type").then((response) => {
      responseData = response.data.stages.map((row, key) => ({
        key: row.worktype_id,
        worktype: row.worktype,
      }));
    });

    setWorkType(responseData);

    // console.log("response", state);
    // const response = await axios.get("http://localhost:2500/department");
    // setState(response?.data?.data);
  };
  return (
    <JobPostingSelect
      placeholder="Select Worktype"
      optionFilterProp="children"
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {getWorkType?.map((data, key) => {
        return <Option value={data.key}>{data.worktype}</Option>;
      })}
    </JobPostingSelect>
  );
};

export default JobWorkTypeSelect;
