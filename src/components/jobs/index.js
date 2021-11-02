import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";

import Axios from "axios";
import {
  ClearFilterButton,
  SpinLocation,
  Spinner,
  FilterText,
  JobsBody,
  JobsHeader,
  OpenJobDepartmentName,
  JobTableDiv,
  Header,
  HeaderTitle,
  JobPostingDiv,
  PostingInput,
  AddJobPostingButton,
  JobModal,
  DepartmentSelectDiv,
  JobDepartmentDropdown,
  JobLocationDropdown,
  JobOwnerDropdown,
  FiltersText,
} from "./jobs.style";
import { Select } from "antd";
import JobsTable from "./jobstable";
import { DEPARTMENT_GET, GET_ALLJOBS } from "./apis";
import JobPosting from "../jobposting";
import JobDepartmentSelect from "./jobdepartmentselect";
import JobLocationSelect from "./joblocationselect";
import JobPostingOwnerSelect from "./jobpostingownerselect";
import { useSelector } from "react-redux";

const Jobs = () => {
  const [clearFilter, setClearFilter] = useState(false);
  const [departmentName, setDepartmentName] = useState();
  const [filterDepartmentName, setFilterDepartmentName] = useState("");
  const [filterLocationName, setFilterLocationName] = useState("");
  const [jobs, setJobs] = useState([]);
  const [jobArrays, setJobArrays] = useState();
  const [modalState, setModalState] = useState(false);
  const [jobModalVisible, setJobModalVisible] = useState(false);
  const [filterOwner, setFilterOwner] = useState("");
  const [loading, setLoading] = useState(true);
  const pageReload = useSelector((state) => state.addCandidates.reloadPage);
  const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />;

  let jobArray = [];

  const { Option } = Select;

  const handleOk = () => {
    setJobModalVisible(false);
  };

  const handleCancel = () => {
    setJobModalVisible(false);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
    setClearFilter(true);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "jobs" });

    getDepartments();
    console.log("FINAL JOBS", jobs);
  }, [
    jobModalVisible,
    filterDepartmentName,
    filterLocationName,
    filterOwner,
    modalState,
  ]);

  useEffect(() => {
    getDepartments();
    console.log("PAGE RELOAD", pageReload);
  }, [pageReload]);

  const handleFilter = () => {
    setClearFilter(false);
    setFilterDepartmentName("");
    setFilterLocationName("");
    setFilterOwner("");
  };

  const getDepartments = async () => {
    const response = await Axios.get(
      `${GET_ALLJOBS}?department_id=${filterDepartmentName}&job_loc=${filterLocationName}&job_createdby=${filterOwner}`
    );
    setLoading(false);
    setDepartmentName(
      response.data.job.map((row, key) => ({
        department_name: row.department_name,
        department_id: row.department_id,
        jobs: row.jobs,
      }))
    );

    console.log("LATEST CONSOLE LOG", departmentName);

    console.log("adkansdasjdasbdsabddhds", response.data);
    console.log("res", response.data.job);
  };

  const openJobModal = () => {
    setJobModalVisible(true);
  };
  return (
    <React.Fragment>
      <Header>
        <HeaderTitle>VisionX</HeaderTitle>
        <JobPostingDiv>
          <PostingInput placeholder="Search Postings"></PostingInput>
          <AddJobPostingButton onClick={openJobModal}>
            Add Job Posting
          </AddJobPostingButton>
        </JobPostingDiv>
      </Header>

      <JobsHeader>
        <FilterText>
          <FiltersText>Filters:</FiltersText>
          <JobDepartmentDropdown>
            <JobDepartmentSelect
              jobDepartment={setFilterDepartmentName}
              jobDepartmentCallback={filterDepartmentName}
            />
          </JobDepartmentDropdown>
          <JobLocationDropdown>
            <JobLocationSelect locationSelect={setFilterLocationName} />
          </JobLocationDropdown>
          <JobOwnerDropdown>
            <JobPostingOwnerSelect ownerSelect={setFilterOwner} />
          </JobOwnerDropdown>
        </FilterText>

        <ClearFilterButton onClick={handleFilter}>
          Clear Filters
        </ClearFilterButton>
      </JobsHeader>
      {loading ? (
        <SpinLocation>
          <Spinner indicator={antIcon} />
        </SpinLocation>
      ) : (
        <JobTableDiv>
          {departmentName?.map((data, key) => {
            <div>{key.department_id}</div>;
            return (
              <React.Fragment>
                <OpenJobDepartmentName>
                  {data.department_name}
                </OpenJobDepartmentName>
                <JobsBody>
                  <JobsTable
                    allJobs={data.jobs}
                    modalVisibility={setModalState}
                  ></JobsTable>
                </JobsBody>
              </React.Fragment>
            );
          })}
        </JobTableDiv>
      )}

      <JobModal
        visible={jobModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="1000px"
        height="740px"
        footer={false}
        closable={false}
        destroyOnClose
      >
        <JobPosting jobModalVisibility={setJobModalVisible} />
      </JobModal>
    </React.Fragment>
  );
};

export default Jobs;
