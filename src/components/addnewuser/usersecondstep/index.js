import React from "react";
import {
  UserSecondFollowing,
  UserSecondFollowingDiv,
  UserSecondFollowingText,
  UserSecondJobTags,
  UserSecondLocationSelect,
  UserSecondStepCandidateAccess,
  UserSecondStepCandidateAccessDiv,
  UserSecondStepDiv,
  UserSecondStepEmail,
  UserSecondStepEmailDiv,
  UserSecondStepLinked,
  UserSecondStepName,
  UserSecondStepRoleDiv,
  UserSecondStepRoleLabel,
  UserSecondStepRoleSelect,
  UserSecondStepTeamDiv,
  UserSecondStepText,
  UserSecondTeamIn,
  UserSecondTeamSelect,
} from "./usersecondstep.style";
import { Select } from "antd";
import EditableTagGroup from "../../../common/anttags";

const UserSecondStep = () => {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <React.Fragment>
      <UserSecondStepDiv>
        <UserSecondStepEmailDiv>
          <UserSecondStepName>John Doe</UserSecondStepName>
          <UserSecondStepEmail>(john.doe@organization.com)</UserSecondStepEmail>
        </UserSecondStepEmailDiv>
        <UserSecondStepRoleDiv>
          <UserSecondStepRoleLabel>Role</UserSecondStepRoleLabel>
          <UserSecondStepRoleSelect>
            <Select
              defaultValue="limitedteammember"
              style={{ width: 450 }}
              onChange={handleChange}
            >
              <Option value="superadmin">Super Admin</Option>
              <Option value="admin">Admin</Option>
              <Option value="teammember">Team Member</Option>
              <Option value="limitedteammember">Limited Team Member</Option>
              <Option value="interviewer">Interviewer</Option>
            </Select>
          </UserSecondStepRoleSelect>
        </UserSecondStepRoleDiv>
      </UserSecondStepDiv>
    </React.Fragment>
  );
};

export default UserSecondStep;
