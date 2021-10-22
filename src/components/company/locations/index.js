import React, { useEffect, useState } from "react";
import {
  CityTable,
  CompanyLocationAddCountry,
  CompanyLocationBody,
  CompanyLocationName,
  CompanyLocationsHeader,
  CompanyLocationTitleDiv,
  DepartmentCountryName,
  CompanyLocationTitle,
} from "./locations.style";
import CompanyLocationTable from "./locationtables";
import { FlexColumn } from "../../../common/flexcolumn/flexcolumn.style";
import { useDispatch } from "react-redux";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import Editable from "react-editable-title";
import { Alert } from "antd";
import {
  DepartmentTeamInput,
  DepartmentTeamInputDiv,
} from "../departmentandteams/department.style";

const CompanyLocations = () => {
  const [countryName, setCountryName] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [text, setText] = useState("Pakistan");
  const [focused, setFocused] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (countryName.length === 0) {
      <Alert message="Please Enter Department Name" type="error" />;
    } else {
      setIsModalVisible(false);
      <Alert message="Department Added Successfully" type="success" />;
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleTextUpdate = (current) => {
    setText(current);
  };
  const handleCountryName = (event) => {
    setCountryName(event.target.value);
  };
  const handleEditCancel = () => {
    console.log("First editable title`s edit has been canceled");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "company" });
  }, []);

  return (
    <React.Fragment>
      <CompanyLocationsHeader>
        <CompanyLocationTitleDiv>
          <CompanyLocationName>
            VisionX
            <DepartmentCountryName>
              <CompanyLocationTitle>Pakistan</CompanyLocationTitle>
            </DepartmentCountryName>
          </CompanyLocationName>
        </CompanyLocationTitleDiv>

        <CompanyLocationAddCountry onClick={showModal}>
          + Add Country
        </CompanyLocationAddCountry>
      </CompanyLocationsHeader>
      <CompanyLocationBody>
        <CityTable>
          <CompanyLocationTable />
        </CityTable>
      </CompanyLocationBody>
      <Modal
        title="Add a Department"
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
            placeholder="Enter Country Name"
            onChange={handleCountryName}
          />
        </DepartmentTeamInputDiv>
      </Modal>
    </React.Fragment>
  );
};

export default CompanyLocations;
