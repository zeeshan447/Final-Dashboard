import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { Columns } from "./columns";
import { DataSource } from "./datasource";
import Axios from "axios";
import { JobDepartmentTable, JobModal } from "./jobstable.style";
import JobDetails from "../../jobdetails";

const JobsTable = ({ departmentId, allJobs, modalVisibility }) => {
  const [jobs, setJobs] = useState();
  const [jobData, setJobData] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const getData = async () => {
    await Axios.get(`http://localhost:2500/job/${departmentId}`).then((res) => {
      setJobs(
        res.data.data.map((row, key) => ({
          job_id: row.job_id,
          job_title: row.job_title,
          job_loc: row.job_loc,
          worktype_id: row.worktype_id,
          worktype: row.worktype,
          job_createdby: row.job_createdby,
          department_name: row.department_name,
        }))
      );
    });
  };

  return (
    <React.Fragment>
      <JobDepartmentTable
        className="table-settings"
        columns={Columns}
        dataSource={allJobs}
        pagination={false}
        onRow={(record) => ({
          onClick: (event) => {
            console.log("Row Selceted", record);
            setIsModalVisible(true);
            console.log("rowdata", record);
            setJobData(record);
          },
        })}
      ></JobDepartmentTable>

      <JobModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="1000px"
        height="740px"
        footer={false}
        closable={false}
        destroyOnClose
      >
        <JobDetails jobDetails={jobData} updateJob={modalVisibility} />
      </JobModal>
    </React.Fragment>
  );
};

export default JobsTable;
