import React, { useEffect, useState } from "react";
import Axios from "axios";
import "antd/dist/antd.css";
import "./departmenttable.css";
import { Table, Badge, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";

import {
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import DepartmentTeam from "../departmentteams";
import {
  DepartmentTeamInput,
  DepartmentTeamInputDiv,
} from "./departmentandteams.style";

function DepartmentTeamTable({ recallDepartment }) {
  const [departmentNames, setDepartmentNames] = useState([]);
  const [teamName, setTeamName] = useState([]);
  const [rowId, setRowId] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputTeamName, setInputTeamName] = useState();
  const [departmentId, setDepartmentID] = useState();

  useEffect(() => {
    getDepartmentNames();
    getTeamNames();
  }, [recallDepartment]);

  const addTeamHandler = (departmentId) => {
    console.log("DEPARTMENT ID", departmentId.key);
    setDepartmentID(departmentId.key);
    setIsModalVisible(true);
  };

  const menu = (id) => (
    <Menu>
      <Menu.Item
        icon={<PlusOutlined />}
        key={id}
        onClick={() => addTeamHandler(id)}
      >
        Add Location
      </Menu.Item>
      <Menu.Item icon={<EditOutlined />}>Edit</Menu.Item>
      <Menu.Item danger icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
    </Menu>
  );
  const handleOk = () => {
    insertTeam();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const insertTeam = () => {
    Axios.post("http://localhost:2500/team", {
      team_name: inputTeamName,
      department_id: departmentId,
    }).then((res) => {
      console.log("TEAM RESPONSE", res);
    });
  };
  const getDepartmentNames = async () => {
    await Axios.get("http://localhost:2500/country").then((res) => {
      setDepartmentNames(
        res.data.locations.map((row, key) => ({
          key: row.country_id,
          country_name: row.country_name,
        }))
      );
    });
  };

  console.log(departmentNames.length);

  const getTeamNames = async () => {
    await Axios.get("http://localhost:2500/company-loc").then((res) => {
      setTeamName(
        res.data.locations.map((row, key) => ({
          key: row.loc_id,
          loc_name: row.loc_name,
          country_id: row.country_id,
        }))
      );
    });
  };
  console.log("teams", teamName);

  const expandedRowRender = (row) => {
    const columns = [
      { dataIndex: "loc_name", key: "loc_name" },

      {
        title: "Action",
        key: "operation",
        render: () => (
          <Dropdown overlay={menu} overlayStyle={{ width: 132 }}>
            <MoreOutlined />
          </Dropdown>
        ),
      },
    ];
    console.log("row ", row);

    const getTeamById = async () => {
      debugger;
      await Axios.get(`http://localhost:2500/company-loc/${row}`).then(
        (res) => {
          setRowId(
            res.data.data.map((row, key) => ({
              key: row.loc_id,
              loc_name: row.loc_name,
              country_id: row.country_id,
            }))
          );
        }
      );
    };
    console.log("row ", rowId);
    //let inTable = row.key === rowId.key;
    return <Table columns={columns} dataSource={rowId} pagination={false} />;
  };

  const columns = [
    { dataIndex: "country_id", key: "id" },
    {
      dataIndex: "country_name",
      key: "country_name",
      render: (text, record) => (
        <span className="department-name">{record.country_name}</span>
      ),
    },
    {
      title: "Action",
      key: "operation",
      render: (record) => (
        <Dropdown overlay={menu(record)} overlayStyle={{ width: 132 }}>
          <MoreOutlined />
        </Dropdown>
      ),
    },
  ];

  const handleTeamName = (e) => {
    setInputTeamName(e.target.value);
  };
  return (
    <React.Fragment>
      <Table
        className="table-settings"
        columns={columns}
        // expandable={{ expandedRowRender }}
        dataSource={departmentNames}
        pagination={false}
        expandedRowRender={(record, i) => (
          <DepartmentTeam
            record={record}
            onChange={() => this.OnCoverageProductNumberChanged(i)}
          />
        )}
      />
      <Modal
        title="Add Team"
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
            placeholder="Enter Location"
            onChange={handleTeamName}
          />
        </DepartmentTeamInputDiv>
      </Modal>
    </React.Fragment>
  );
}

export default DepartmentTeamTable;
