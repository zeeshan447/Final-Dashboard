import React from "react";
import { FeedbackFormDropdown } from "./feedbackformselect.style";

const { Option } = FeedbackFormDropdown;

const FeedbackFormSelect = ({ typeInterview }) => {
  function handleChange(value) {
    debugger;
    console.log(`selected ${value}`);
    typeInterview(value);
  }
  return (
    <>
      <FeedbackFormDropdown
        placeholder="Interview Type"
        style={{ width: 163 }}
        onChange={handleChange}
      >
        <Option value="Video Interview">Video Interview</Option>
        <Option value="Onsite Interview">Onsite Interview</Option>
      </FeedbackFormDropdown>
    </>
  );
};

export default FeedbackFormSelect;
