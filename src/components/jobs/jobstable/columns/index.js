import "../jobstable.css";
import "antd/dist/antd.css";
import { Avatar } from "antd";
import { Tooltip } from "antd";

export const Columns = [
  {
    dataIndex: "job_title",
    key: "jobname",
    render: (text, record) => (
      <div className="name-detail">
        <span className="job-name">{record.job_title}</span>
        <div className="detail">
          <span className="detail-style">{record.job_loc}</span>
          <span className="detail-style">{record.work_type}</span>
          <span className="detail-style">{record.department_name}</span>
        </div>
      </div>
    ),
  },
  {
    dataIndex: "opportunities",
    key: "opportunities",
    render: (text, record) => (
      <div className="name-detail">
        <span className="opportunities-styling">{record.opportunities}</span>
        <span className="opportunities-styling">{record.archived}</span>
      </div>
    ),
  },
  {
    dataIndex: "job_created",
    key: "job_created",
    render: (text) => (
      <Tooltip title={text}>
        <Avatar
          style={{
            backgroundColor: "#f56a00",
            color: "white",
            verticalAlign: "middle",
          }}
          size="large"
        >
          {text?.match(/\b(\w)/g)}
        </Avatar>
      </Tooltip>
    ),
  },
];
