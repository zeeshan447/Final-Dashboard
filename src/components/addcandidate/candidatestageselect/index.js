import React from "react";
import "antd/dist/antd.css";
import { AddCandidateStageSelect } from "./candidatestageselect.style";
const { Option } = AddCandidateStageSelect;

const CandidateStageSelect = () => {
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  return (
    <AddCandidateStageSelect
      placeholder="New Applicant"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option disabled value="newapplicant">
        NEW APPLICAN T
      </Option>
      <Option disabled value="review">
        REVIEW
      </Option>
      <Option disabled value="phonescreen">
        PHONE SCREEN
      </Option>
      <Option disabled value="firstround">
        FIRST ROUND
      </Option>
      <Option disabled value="secondround">
        SECOND ROUND
      </Option>
      <Option disabled value="offered">
        OFFERED
      </Option>
      <Option disabled value="hired">
        HIRED
      </Option>
    </AddCandidateStageSelect>
  );
};

export default CandidateStageSelect;
