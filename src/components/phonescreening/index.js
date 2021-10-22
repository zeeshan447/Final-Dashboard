import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { Columns } from "../../data/applicants/applicantcolumns";
import CustomTableFilters from "../../common/filterbuttons";
import Axios from "axios";
import "../applicant_table/table.css";
import { Modal } from "antd";
import CandidateDetails from "../candidatedetails";
import { Spin } from "antd";
import { PHONESCREENED_APPLICANTS } from "./apis";

const PhoneScreening = () => {
  const [select, setSelectedRow] = useState(null);
  const [checked, setChecked] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [rowCounter, setRowCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const [recallApi, setRecallApi] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [jobChangeApiCallback, setJobChangeApiCallback] = useState(false);

  const [getCandidateData, setCandidateData] = useState();
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

  useEffect(() => {
    getData();
  }, [recallApi]);

  const getData = async () => {
    await Axios.get(`${PHONESCREENED_APPLICANTS}=PHONE SCREEN`).then((res) => {
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
    });
  };

  return (
    <React.Fragment>
      {checked && (
        <CustomTableFilters
          rowData={select}
          apiCall={setRecallApi}
          secondApiCall={recallApi}
        />
      )}
      <h2 className="new-applicant">APPLICANTS IN PHONE SCREENING</h2>

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
          <Modal
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
            <CandidateDetails
              candidateData={getCandidateData}
              dataCallBack={setJobChangeApiCallback}
              secondDataCallback={jobChangeApiCallback}
              candidateDetailModal={isModalVisible}
            ></CandidateDetails>
          </Modal>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default PhoneScreening;
