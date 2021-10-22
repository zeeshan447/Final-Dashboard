import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { Spin } from "antd";
import { Columns } from "../../data/applicants/applicantcolumns";
import CustomTableFilters from "../../common/filterbuttons";
import Axios from "axios";
import "./table.css";
import { Modal } from "antd";
import CandidateDetails from "../candidatedetails";
import { GET_NEWAPPLICANTS } from "./apis";
import { CandidateDetailModal } from "./applicanttable.style";

const ApplicantTable = () => {
  const [select, setSelectedRow] = useState([]);
  const [checked, setChecked] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [rowCounter, setRowCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const [applicantCount, setApplicantCount] = useState(0);
  const [recallApi, setRecallApi] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [getCandidateData, setCandidateData] = useState();
  const [jobChangeApiCallback, setJobChangeApiCallback] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  let checkedArray = [];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setSelectedRow(selectedRows);
      setRowCounter(selectedRows.length);

      checkedArray = selectedRows.push(...selectedRows);
      if (selectedRows.length >= 2) {
        setChecked(true);
      } else {
        setChecked(false);
      }
    },
  };
  const getData = async () => {
    await Axios.get(
      "http://localhost:2500/can/initial?stage=NEW APPLICANTS"
    ).then((res) => {
      setLoading(false);
      setCandidates(
        res.data.data.map((row, key) => ({
          key: row.candidate_id,
          candidate_name: row.candidate_name,
          prev_company: row.prev_company,
          job_title: row.job_title,
          created_at: row.created_at,
          hiringmanager: row.hiringmanager,
          job_id: row.job_id,
          urls: row.urls,
          cv: row.cv,
          stage: row.stage,
          candidate_job_maping_id: row.candidate_job_maping_id,
          address: row.address,
          email: row.email,
          phone: row.phone,
        }))
      );
      console.log("INITIAL RESPONSE", res);
      console.log("zeeshan ", res.data.count);
      setApplicantCount(res.data.count);
    });
  };
  useEffect(() => {
    getData();
  }, [recallApi, jobChangeApiCallback]);

  console.log("select", checked);
  console.log("helloooasdijas", recallApi);
  return (
    <React.Fragment>
      {checked && (
        <CustomTableFilters
          rowData={select}
          apiCall={setRecallApi}
          secondApiCall={recallApi}
        />
      )}
      <h2 className="new-applicant">NEW APPLICANTS</h2>

      {loading ? (
        <Spin size="large" />
      ) : (
        <React.Fragment>
          {rowCounter === 0 ? null : (
            <p className="row-counter">Selected Rows {rowCounter}</p>
          )}
          <Table
            className="table-settings"
            rowSelection={{
              ...rowSelection,
            }}
            columns={Columns}
            dataSource={candidates}
            pagination={false}
            onRow={(record) => ({
              onClick: (event) => {
                setIsModalVisible(true);
                console.log("rowdata", record);
                setCandidateData(record);
              },
            })}
          ></Table>
          <CandidateDetailModal
            title="Candidate Details"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width="991px"
            height="888px"
            footer={false}
            afterClose={handleCancel}
            destroyOnClose
          >
            {console.log("MODAL CLOSABLE", isModalVisible)}
            <CandidateDetails
              candidateData={getCandidateData}
              dataCallBack={setJobChangeApiCallback}
              secondDataCallback={jobChangeApiCallback}
              candidateDetailModal={isModalVisible}
            ></CandidateDetails>
          </CandidateDetailModal>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ApplicantTable;
