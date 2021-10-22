import React, { useState, useEffect } from "react";
import AntSelect from "../../../common/antselect";
import Axios from "axios";
import { FlexColumn } from "../../../common/flexcolumn/flexcolumn.style";
import { FlexRow } from "../../../common/flexrow/flexrow.style";
import { useDispatch } from "react-redux";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";

import {
  DepartmentAddTeamButton,
  DepartmentTeamAddButton,
  DepartmentTeamAddDiv,
  DepartmentTeamAddlabel,
  DepartmentTeamCompany,
  DepartmentTeamInput,
  DepartmentTeamInputDiv,
  DepartmentTeamSelect,
  DepartmentTeamSubHeader,
  DepartmentTeamTableDiv,
  DepartmentTeamTitle,
} from "./department.style";
import DepartmentTeamTable from "./departmentandteamstable";
import { Alert } from "antd";
import { ContactMailSharp } from "@material-ui/icons";
import DepartmentModal from "./departmentmodaldata";

const DepartmentAndTeam = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentID, setDepartmentID] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [departmentTitle, setDepartmentTitle] = useState();
  const [focused, setFocused] = useState(false);
  const [displayTitle, setDisplayTitle] = useState(false);
  const [active, setActive] = useState(false);
  const [recallApi, setRecallApi] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (departmentName.length === 0) {
      <alert message="Please Enter Department Name" type="error" />;
    } else {
      insertData();
      setRecallApi(true);

      setIsModalVisible(false);
      <alert message="Department Added Successfully" type="success" />;
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleTextUpdate = (current) => {
    departmentTitle(current);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "company" });
    const response = Axios.get("http://localhost:2500/department");
    console.log("department response", response);
  }, []);

  const addDepartmentHandler = () => {
    insertData();
  };

  const insertData = async () => {
    await Axios.post("http://localhost:2500/department", {
      department_name: departmentName,
    }).then((response) => {
      console.log(response.userData);
    });
  };

  const handleDepartmentName = (event) => {
    setDepartmentName(event.target.value);
  };

  console.log("ID = ", departmentID);

  // const displayDepartmentName = async (newDepartmentID) => {
  //   await Axios.get(`http://localhost:2500/department/${newDepartmentID}`).then(
  //     (res) => {
  //       setDepartmentTitle(
  //         // res.data.data.map((row, key) => ({
  //         //   key: row.department_id,
  //         //   department_name: row.department_name,
  //         // }))
  //         res.data.data
  //       );
  //     }
  //   );
  //   setDisplayTitle(true);
  // };
  console.log("department NAme", departmentTitle);
  return (
    <FlexColumn>
      <FlexRow>
        <DepartmentTeamCompany>VisionX</DepartmentTeamCompany>
      </FlexRow>
      <DepartmentTeamSubHeader>
        <DepartmentTeamAddDiv>
          <DepartmentTeamAddButton onClick={showModal}>
            + Add Department{" "}
          </DepartmentTeamAddButton>
        </DepartmentTeamAddDiv>
      </DepartmentTeamSubHeader>
      <DepartmentTeamTableDiv>
        <DepartmentTeamTable recallDepartment={recallApi} />
      </DepartmentTeamTableDiv>
      <Modal
        title="Add Department"
        bodyStyle={{ backgroundColor: "#EDEEF2" }}
        visible={isModalVisible}
        closable={false}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Done
          </Button>,
        ]}
      >
        <DepartmentTeamInputDiv>
          <DepartmentTeamInput
            placeholder="Enter Department Name"
            onChange={handleDepartmentName}
          />
        </DepartmentTeamInputDiv>
      </Modal>
    </FlexColumn>
  );
};

export default DepartmentAndTeam;
