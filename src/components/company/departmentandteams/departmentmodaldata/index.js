import React, { useState } from "react";
import {
  DepartmentTeamInput,
  DepartmentTeamInputDiv,
} from "./deparmentmodal.style";

const DepartmentModal = () => {
  const [departmentName, setDepartmentName] = useState("");
  const handleDepartmentName = (event) => {
    setDepartmentName(event.target.value);
    //updateDepartment();
  };
  return (
    <React.Fragment>
      <DepartmentTeamInputDiv>
        <DepartmentTeamInput
          placeholder="Enter Department Name"
          onChange={handleDepartmentName}
        />
      </DepartmentTeamInputDiv>
    </React.Fragment>
  );
};

export default DepartmentModal;
