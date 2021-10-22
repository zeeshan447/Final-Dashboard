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
} from "./addnewuser.style";
import Axios from "axios";

const { Item } = Form;
const { Option } = Select;

const AddNewUser = ({ modalVisibility }) => {
  const [form] = Form.useForm();
  const [userRoles, setUserRoles] = useState([]);
  const [roleId, setRoleId] = useState();
  const [userData, setUserData] = useState({
    email: "",
    name: "",
  });
  let responseData = "";
  useEffect(() => {
    // const response = Axios.get("http://localhost:2500/roles");
    // console.log("options", response);
    getData();
  });

  const getData = async () => {
    await Axios.get("http://localhost:2500/role").then((response) => {
      responseData = response.data.data.map((row, key) => ({
        role_id: row.role_id,
        role_name: row.role_name,
        role_value: row.row_value,
      }));
      setUserRoles(responseData);
    });
  };

  const handleChange = (e) => {
    const newData = { ...userData };
    newData[e.target.id] = e.target.value;
    setUserData(newData);
    //storeUserData(newData);

    console.log("data", newData);
    //console.log("store user data", storeUserData);
  };

  const addUserHandler = async () => {
    await Axios.post("http://localhost:2500/user", {
      user_name: userData.name,
      email: userData.email,
      role_id: roleId,
    }).then((response) => {
      console.log("USER DATA RESPONSE", response);
    });
    modalVisibility(false);
  };

  const handleOptionChange = (value) => {
    console.log(`selected ${value}`);
    setRoleId(value);
  };
  return (
    <React.Fragment>
      <AddNewUserContainer>
        <div className="steps-content">
          <Form form={form}>
            <Item>
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
              <UserSecondStepDiv>
                <UserSecondStepRoleDiv>
                  <UserSecondStepRoleLabel>Role</UserSecondStepRoleLabel>
                  <UserSecondStepRoleSelect>
                    <Select
                      defaultValue="admin"
                      style={{ width: 450, height: 40 }}
                      onChange={handleOptionChange}
                    >
                      {userRoles.map((data, key) => {
                        key = { key };
                        return (
                          <Option value={data.role_id}>{data.role_name}</Option>
                        );
                      })}
                    </Select>
                  </UserSecondStepRoleSelect>
                </UserSecondStepRoleDiv>
              </UserSecondStepDiv>
            </Item>
          </Form>
        </div>
        <div className="steps-action">
          <Button
            style={{ margin: "20px 0px 0px 350px", width: "100px" }}
            type="primary"
            onClick={addUserHandler}
          >
            Done
          </Button>
        </div>
      </AddNewUserContainer>
    </React.Fragment>
  );
};
export default AddNewUser;
