import React, { useState, useEffect } from "react";
import { CandidateInterviewerSelect } from "./candidateinterviewerselect.style";
import { GET_ALLUSERS } from "../../apis";
import Axios from "axios";

const InterviewerSelect = ({ interviwersName }) => {
  const { Option } = CandidateInterviewerSelect;
  let responseData = [];
  const [getInterviewer, setInterviewer] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get(GET_ALLUSERS).then((response) => {
      responseData = response.data.data.map((row, key) => ({
        key: row.user_id,
        user_name: row.user_name,
        email: row.email,
        role_name: row.role_name,
      }));
    });

    setInterviewer(responseData);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
    console.log("value", value);
    interviwersName(value);
  }

  return (
    <React.Fragment>
      <CandidateInterviewerSelect
        mode="multiple"
        allowClear
        placeholder="Please select Interviewers"
        onChange={handleChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {getInterviewer?.map((data, key) => {
          return <Option value={data.key}>{data.user_name}</Option>;
        })}
      </CandidateInterviewerSelect>
    </React.Fragment>
  );
};

export default InterviewerSelect;
