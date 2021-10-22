import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { AddCandidateStageSelect } from "./candidatestageselect.style";
import { GET_HIRINGSTAGES } from "../apis";
import Axios from "axios";
const { Option } = AddCandidateStageSelect;

const CandidateStageChange = ({
  candidateStage,
  stageChangeCallback,
  secondStageCallback,
}) => {
  const [getStages, setStages] = useState();
  const [currentCandidate, setCurrentCandidate] = useState([]);
  let responseData = [];
  let candidatesArray = Object.values(candidateStage);

  function onChange(value) {
    if (value.length === 0) {
      console.log(`selected ${value}`);
    }
    if (value.length > 0) {
      changeStageHandler(value);
    }
  }

  // const changeStageHandler = async (value) => {
  //   debugger;
  //   await Axios.put(
  //     "http://localhost:2500/can/status",
  //     Object.keys(currentCandidate).map((row, key) => ({
  //       candidate_id: currentCandidate[row.candidate_id],
  //       job_id: currentCandidate[row.job_id],
  //       stage: value,
  //     }))
  //   ).then((res) => {
  //     console.log("response", res);
  //     alert("Stage Changed Successfully");
  //   });
  // };

  const changeStageHandler = async (value) => {
    debugger;
    await Axios.put(
      "http://localhost:2500/can/status",
      candidatesArray.map((row, key) => ({
        candidate_id: candidatesArray[0],
        job_id: candidatesArray[6],
        stage: value,
      }))
    ).then((res) => {
      console.log("response", res);
    });
    stageChangeCallback(secondStageCallback);
  };

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  useEffect(() => {
    getData();
    // const resp = Axios.get(GET_HIRINGSTAGES);
    // setCurrentCandidate();
    console.log("candidakjaehrkjewhrehjraer", candidateStage);
    console.log("Helllloooo", candidatesArray[0]);
  }, []);
  console.log("aklsdalkjshdsa", currentCandidate);

  const getData = async () => {
    await Axios.get(GET_HIRINGSTAGES).then((response) => {
      setStages(
        response.data.stages.map((row, key) => ({
          stage_id: row.stage_id,
          stage_name: row.stage_name,
        }))
      );
    });
  };
  console.log("asdjsadsad ", getStages);

  console.log("lkasdkasjdlka, ", candidateStage.stage);

  return (
    <AddCandidateStageSelect
      defaultValue={candidateStage.stage}
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {getStages?.map((data, key) => {
        return <Option value={data.stage_name}>{data.stage_name}</Option>;
      })}
    </AddCandidateStageSelect>
  );
};

export default CandidateStageChange;
