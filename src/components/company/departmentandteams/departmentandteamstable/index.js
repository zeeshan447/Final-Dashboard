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
        Add Team
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
    await Axios.get("http://localhost:2500/department").then((res) => {
      setDepartmentNames(
        res.data.data.map((row, key) => ({
          key: row.department_id,
          department_name: row.department_name,
        }))
      );
    });
  };

  console.log(departmentNames.length);

  const getTeamNames = async () => {
    await Axios.get("http://localhost:2500/team").then((res) => {
      setTeamName(
        res.data.data.map((row, key) => ({
          key: row.team_id,
          team_name: row.team_name,
          department_id: row.department_id,
        }))
      );
    });
  };
  console.log("teams", teamName);

  const expandedRowRender = (row) => {
    const columns = [
      { dataIndex: "team_name", key: "team_name" },

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
      await Axios.get(`http://localhost:2500/team/${row}`).then((res) => {
        setRowId(
          res.data.data.map((row, key) => ({
            key: row.team_id,
            team_name: row.team_name,
            department_id: row.department_id,
          }))
        );
      });
    };
    console.log("row ", rowId);
    //let inTable = row.key === rowId.key;
    return <Table columns={columns} dataSource={rowId} pagination={false} />;
  };

  const columns = [
    { dataIndex: "department_id", key: "id" },
    {
      dataIndex: "department_name",
      key: "department_name",
      render: (text, record) => (
        <span className="department-name">{record.department_name}</span>
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
            placeholder="Enter Team Name"
            onChange={handleTeamName}
          />
        </DepartmentTeamInputDiv>
      </Modal>
    </React.Fragment>
  );
}

export default DepartmentTeamTable;
