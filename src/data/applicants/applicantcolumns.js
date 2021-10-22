import "antd/dist/antd.css";
import { Avatar } from "antd";
import "./aplicanttable.css";
import React from "react";
import { Tooltip } from "antd";

export const Columns = [
  {
    dataIndex: "candidate_name",
    render: (text, record) => (
      <div className="name-company">
        <span className="name">{record.candidate_name}</span>
        <span className="company">{record.prev_company}</span>
      </div>
    ),
  },

  {
    dataIndex: "job_title",
    render: (text) => (
      <div className="positiondiv">
        <span className="position">{text}</span>
      </div>
    ),
  },
  {
    dataIndex: "created_at",
    render: (text) => (
      <div>
        <span className="date">{text.slice(0, 10)}</span>
      </div>
    ),
  },
  {
    dataIndex: "hiringmanager",
    key: "hiringmanager",
    render: (text) => (
      <Tooltip title={text}>
        <Avatar
          style={{
            backgroundColor: "#f56a00",
            verticalAlign: "middle",
          }}
          size="large"
        >
          {text ? text.match(/\b(\w)/g) : null}
        </Avatar>
      </Tooltip>
    ),
  },
];
