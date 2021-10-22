import React from "react";
import { MeetingLocationSelect } from "./meetinglocationselect.style";

const { Option } = MeetingLocationSelect;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const MeetingLocation = () => {
  return (
    <>
      <MeetingLocationSelect
        placeholder="Meeting Room"
        style={{ width: 163 }}
        onChange={handleChange}
      >
        <Option value="1">Moonshot</Option>
        <Option value="2">Cartwheel</Option>
      </MeetingLocationSelect>
    </>
  );
};

export default MeetingLocation;
