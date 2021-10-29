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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ApplicantTable = ({ getCount }) => {
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
  const userDetailing = useSelector((state) => state.userDetails.userDetails);
  const [stageChangeApiCallback, setStageChangeApiCallback] = useState(false);
  const pageReload = useSelector((state) => state.addCandidates.reloadPage);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };
  useEffect(() => {
    console.log("USERID FROM REDUCER", userDetailing?.user_name);
  });
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    dispatch({ type: "DEFAULT" });
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
      "https://peoplexdevapi.packagex.xyz/can/initial?stage=NEW APPLICANTS"
    ).then((res) => {
      setLoading(false);
      setCandidates(
        res.data.data.map((row, key) => ({
          key: row.candidate_id,
          candidate_name: row.candidate_name,
          prev_company: row.prev_company,
          job_title: row.job_title,
          created_at: row.created_at,
          hiringmanager: row.user_name,
          job_id: row.job_id,
          urls: row.urls,
          cv: row.cv,
          stage: row.stage,
          candidate_job_maping_id: row.candidate_job_maping_id,
          address: row.address,
          email: row.email,
          phone: row.phone,
          job_createdby: row.job_createdby,
          notes: row.notes,
        }))
      );
      console.log("INITIAL RESPONSE", res);
      console.log("zeeshan ", res.data.count);
      setApplicantCount(res.data.count);
      console.log("CALLING CALL COUNT API");
      getCount();
    });
  };
  useEffect(() => {
    getData();
    console.log("REDUX RESPONSE", pageReload);
    dispatch({ type: "DEFAULT" });
  }, [recallApi, jobChangeApiCallback, stageChangeApiCallback, pageReload]);

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
              stageChange={setStageChangeApiCallback}
            ></CandidateDetails>
          </CandidateDetailModal>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ApplicantTable;
