import "antd/dist/antd.css";
import { Avatar } from "antd";
import "./editusertable.css";
import { EditOutlined, DeleteOutlined, MoreOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { Tooltip } from "antd";

const menu = (
  <Menu>
    <Menu.Item icon={<EditOutlined />}>Edit</Menu.Item>
    <Menu.Item danger icon={<DeleteOutlined />}>
      Delete
    </Menu.Item>
  </Menu>
);
export const Columns = [
  {
    dataIndex: "user_name",
    key: "nameicon",
    render: (text) => (
      <Tooltip title={text}>
        <Avatar
          style={{
            backgroundColor: "#f56a00",
            verticalAlign: "middle",
          }}
          size="large"
        >
          {text.match(/\b(\w)/g)}
        </Avatar>
      </Tooltip>
    ),
  },

  {
    title: "Name/Contact",
    dataIndex: "user_name",
    key: "name",
    render: (text, record) => (
      <div className="name-company">
        <span className="name">{record.user_name}</span>
        <span className="company">{record.email}</span>
      </div>
    ),
  },
  {
    title: "Role",
    dataIndex: "role_name",
    key: "role",
    render: (text) => (
      <div className="positiondiv">
        <span className="position">{text}</span>
      </div>
    ),
  },
  {
    title: "Role",
    dataIndex: "actions",
    key: "actions",
    render: (text) => (
      <Dropdown overlay={menu}>
        <MoreOutlined />
      </Dropdown>
    ),
  },
];
