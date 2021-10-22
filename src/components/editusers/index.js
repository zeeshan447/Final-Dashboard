import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../../common/button";
import CustomInput from "../../templates/input";
import EditUserTable from "../editusertable";
import { FilterOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";

import {
  EditUserAddButton,
  EditUserContainer,
  EditUserFilter,
  EditUserFilterButton,
  EditUserHeader,
  EditUserSearchBar,
  EditUserTableDiv,
} from "./editusers.style";
import AddNewUser from "../addnewuser";
import EditableTable from "../testusertable";

const EditUser = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [recallApi, setRecallApi] = useState(false);

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch({ type: "settings" });
  }, []);

  return (
    <React.Fragment>
      <EditUserContainer>
        <EditUserHeader>
          <EditUserFilter>
            <EditUserFilterButton>Users</EditUserFilterButton>
          </EditUserFilter>
          <EditUserSearchBar>
            <CustomInput width="294px" />
            <EditUserAddButton onClick={showModal}>
              <CustomButton>+ ADD USER</CustomButton>
            </EditUserAddButton>
          </EditUserSearchBar>
        </EditUserHeader>
        <EditUserTableDiv>
          <EditUserTable />
        </EditUserTableDiv>
        <Modal
          visible={isModalVisible}
          width={560}
          title="Add User"
          footer={false}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <AddNewUser modalVisibility={setIsModalVisible} />
        </Modal>
      </EditUserContainer>
    </React.Fragment>
  );
};

export default EditUser;
