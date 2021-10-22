import React from "react";
import EditableTagGroup from "../../../common/anttags";
import {
  UserSecondFollowing,
  UserSecondFollowingDiv,
  UserSecondFollowingText,
  UserSecondJobTags,
} from "./userthirdstep.style";

const UserThirdStep = () => {
  return (
    <UserSecondFollowingDiv>
      <UserSecondFollowing>Following</UserSecondFollowing>
      <UserSecondFollowingText>
        Jobs that the user will get the notifications about.
      </UserSecondFollowingText>
      <UserSecondJobTags>
        <EditableTagGroup />
      </UserSecondJobTags>
    </UserSecondFollowingDiv>
  );
};

export default UserThirdStep;
