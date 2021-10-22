import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table, Badge, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { EditOutlined, DeleteOutlined, MoreOutlined } from "@ant-design/icons";
import Axios from "axios";
import "../departmentandteamstable/departmenttable.css";
const menu = (
  <Menu>
    <Menu.Item icon={<EditOutlined />}>Edit</Menu.Item>
    <Menu.Item danger icon={<DeleteOutlined />}>
      Delete
    </Menu.Item>
  </Menu>
);
const DepartmentTeam = ({ record }) => {
  const [rowId, setRowId] = useState();

  useEffect(() => {
    getTeamById();
    console.log(record.key);
  }, []);

  const columns = [
    {
      dataIndex: "team_name",
      key: "team_name",
      render: (text, record) => (
        <span className="team-name">{record.team_name}</span>
      ),
    },

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
  //console.log("row ", row);

  const getTeamById = async () => {
    await Axios.get(`http://localhost:2500/team/${record.key}`).then((res) => {
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

export default DepartmentTeam;
