import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  AddUserFormDiv,
  AddUserFormEmail,
  AddUserFormEmailInput,
} from "./addnewuserform.style";

const AddNewUserForm = ({ parentCallback }) => {
  // const storeUserData = useSelector((state) => state.initialState);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: "adduser" });
  // });

  const [userData, setUserData] = useState({
    email: "",
    name: "",
  });
  const handleChange = (e) => {
    const newData = { ...userData };
    newData[e.target.id] = e.target.value;
    setUserData(newData);
    //storeUserData(newData);

    console.log("data", newData);
    //console.log("store user data", storeUserData);
  };

  return (
    <React.Fragment>
      <AddUserFormDiv>
        <AddUserFormEmail>Email</AddUserFormEmail>
        <AddUserFormEmailInput
          onChange={(e) => handleChange(e)}
          id="email"
          value={userData.email}
          placeholder="Enter Email"
        />
      </AddUserFormDiv>
      <AddUserFormDiv>
        <AddUserFormEmail>Full Name</AddUserFormEmail>
        <AddUserFormEmailInput
          placeholder="Write Name"
          onChange={(e) => handleChange(e)}
          id="name"
          value={userData.name}
        />
      </AddUserFormDiv>
    </React.Fragment>
  );
};

export default AddNewUserForm;
