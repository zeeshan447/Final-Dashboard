import React, { useState, useEffect } from "react";
import { Select } from "antd";

import "antd/dist/antd.css";
import { Button, Form } from "antd";
import {
  AddNewUserContainer,
  AddUserFormDiv,
  AddUserFormEmail,
  AddUserFormEmailInput,
  UserSecondStepDiv,
  UserSecondStepRoleDiv,
  UserSecondStepRoleLabel,
  UserSecondStepRoleSelect,
} from "./userdetails.style";
import Axios from "axios";
import { UPDATE_USER } from "./apis";

const { Item } = Form;
const { Option } = Select;

const UserDetails = ({ modalVisibility, userDetails }) => {
  const [form] = Form.useForm();
  const [userRoles, setUserRoles] = useState([]);
  const [roleId, setRoleId] = useState();
  //   const [userData, setUserData] = useState({
  //     email: "",
  //     name: "",
  //   });
  const [userEmail, setUserEmail] = useState(userDetails.email);
  const [userName, setUserName] = useState(userDetails.user_name);
  let responseData = "";
  useEffect(() => {
    // const response = Axios.get("https://peoplexdevapi.packagex.xyz/roles");
    // console.log("options", response);
    getData();
    console.log("USERDETAILS", userDetails);
  }, []);

  const getData = async () => {
    await Axios.get("https://peoplexdevapi.packagex.xyz/role").then(
      (response) => {
        responseData = response.data.data.map((row, key) => ({
          role_id: row.role_id,
          role_name: row.role_name,
          role_value: row.row_value,
        }));
        setUserRoles(responseData);
      }
    );
  };

  const handleOptionChange = (value) => {
    console.log(`selected ${value}`);
    setRoleId(value);
  };

  const updateUserHandler = async () => {
    await Axios.put(`${UPDATE_USER}/${userDetails.key}`, {
      user_name: userName,
      email: userEmail,
      role_name: roleId,
    }).then((res) => {
      console.log("RESPONSE", res);
    });
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <React.Fragment>
      <AddNewUserContainer>
        <Form form={form}>
          <Item>
            <AddUserFormDiv>
              <AddUserFormEmail>Email</AddUserFormEmail>
              <AddUserFormEmailInput
                defaultValue={userDetails.email}
                onChange={handleEmailChange}
                id="email"
                placeholder="Enter Email"
              />
            </AddUserFormDiv>
            <AddUserFormDiv>
              <AddUserFormEmail>Full Name</AddUserFormEmail>
              <AddUserFormEmailInput
                defaultValue={userDetails.user_name}
                placeholder="Write Name"
                onChange={handleNameChange}
                id="name"
              />
            </AddUserFormDiv>
            <UserSecondStepDiv>
              <UserSecondStepRoleDiv>
                <UserSecondStepRoleLabel>Role</UserSecondStepRoleLabel>
                <UserSecondStepRoleSelect>
                  <Select
                    defaultValue={userDetails.role_name}
                    style={{ width: 450, height: 40 }}
                    onChange={handleOptionChange}
                  >
                    {userRoles.map((data, key) => {
                      key = { key };
                      return (
                        <Option
                          value={data.role_id}
                          disabled={data.role_id === 4}
                        >
                          {data.role_name}
                        </Option>
                      );
                    })}
                  </Select>
                </UserSecondStepRoleSelect>
              </UserSecondStepRoleDiv>
            </UserSecondStepDiv>
          </Item>
        </Form>
        <Button
          style={{ margin: "20px 0px 0px 350px", width: "100px" }}
          type="primary"
          onClick={updateUserHandler}
        >
          Update
        </Button>
      </AddNewUserContainer>
    </React.Fragment>
  );
};
export default UserDetails;
