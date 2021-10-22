import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";
import {
  ClearFilterButton,
  FilterText,
  JobsBody,
  JobsHeader,
  OpenJobDepartmentName,
  JobTableDiv,
} from "./jobs.style";
import { Select } from "antd";
import JobsTable from "./jobstable";
import { DEPARTMENT_GET, GET_ALLJOBS } from "./apis";

const Jobs = () => {
  const [clearFilter, setClearFilter] = useState(false);
  const [departmentName, setDepartmentName] = useState();
  const [jobs, setJobs] = useState([]);
  const [jobArrays, setJobArrays] = useState();
  const [modalState, setModalState] = useState(false);
  let jobArray = [];

  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
    setClearFilter(true);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "jobs" });
    //getDepartmentName();
    // getJobs();
    getDepartments();
    // getAllJobs();
    console.log("FINAL JOBS", jobs);
  }, []);

  useEffect(() => {
    //const response = await Axios.get(GET_ALLJOBS);
    getAllJobs();
  }, []);

  // useEffect(() => {
  //   const response = Axios.get(GET_ALLJOBS);
  //   const info = response.data.job;
  //   const parsedInfo = {
  //     ...info,
  //     jobs: Object.entries(info.favorite).reduce((obj, [k, v]) => {
  //       obj[k] = "" + v;
  //       return obj;
  //     }, {}),
  //   };
  //   setJobs(parsedInfo);
  // }, []);
  // console.log('HELDSOIAODOIAJSD')

  const handleFilter = () => {
    setClearFilter(false);
  };
  // const getDepartmentName = async () => {
  //   await Axios.get(DEPARTMENT_GET).then((res) => {
  //     setDepartmentName(
  //       res.data.data.map((row, key) => ({
  //         department_id: row.department_id,
  //         department_name: row.department_name,
  //         company_id: row.company_id,
  //       }))
  //     );
  //   });
  // };

  const getDepartments = async () => {
    const response = await Axios.get(GET_ALLJOBS);
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
    jobArray = response.data.job;
    setJobArrays(response.data.job);
    //jobArray = Object.values(response.data.job.jobs);
    getEveryJob();
  };

  const getEveryJob = async () => {
    const response = await Axios.get(GET_ALLJOBS);
    console.log(
      "KJDSKJSADKJSADJKSAD",
      response.data.job[0].jobs[0].job_created
    );
  };

  useEffect(() => {
    console.log("JOB ARRAY", jobArrays);
  });

  const getAllJobs = () => {
    // debugger;
    // jobArray?.jobs.map((row, key) => ({
    //   setJobs(
    //     job_id: r

    //   );
    // }));
    const newarrayy = jobArrays?.map((item) => {
      return item.jobs;
    });
    console.log("new array", newarrayy);

    const secondArray = newarrayy?.map((item) => {
      for (var i = 0; i < newarrayy.length; i++) {
        return item[i].job_id;
      }
    });

    console.log("SECOND ARRAY", secondArray);

    setJobs(
      newarrayy?.map(
        (row, key) => row
        // job_id: row.job_id,
        // job_title: row[0][3],
        // job_loc: row[0][5],
        // job_created: row[0][7],
        // work_id: row[0][9],
        // work_type: row[0][11],
      )
    );
  };
  useEffect(() => {
    console.log("JOB FINAL ARRAY", jobs);
  });
  const getJobs = async () => {
    await Axios.get(GET_ALLJOBS).then((res) => {
      setJobs(
        res.data.job.map((row, key) => ({
          department_name: row.department_name,
          department_id: row.department_id,
          job_id: row.job_id,
          job_title: row.job_title,
          worktype_id: row.worktype_id,
          worktype: row.worktype,
          job_loc: row.job_loc,
          job_createdby: row.job_createdby,
        }))
      );
      console.log("JOB RESPONSE", res);
    });
  };

  console.log("Jobs in departments", jobs);
  console.log("departmentname", departmentName);
  return (
    <React.Fragment>
      <JobsHeader>
        <FilterText>
          Filters:
          <Select
            placeholder="Department"
            style={{ width: 230, margin: 30 }}
            onChange={handleChange}
          >
            <Option value="lucy">Front-End</Option>
            <Option value="disabled">Mobile</Option>
            <Option value="Yiminghe">HR</Option>
          </Select>
          <Select
            placeholder="Location"
            style={{ width: 230, margin: 30 }}
            onChange={handleChange}
          >
            <Option value="jack">Pakistan</Option>
            <Option value="lucy">NewYork</Option>
            <Option value="disabled">Canada</Option>
            <Option value="Yiminghe">Dubai</Option>
          </Select>
          <Select
            placeholder="Owner"
            style={{ width: 230, margin: 30 }}
            onChange={handleChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled">Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </FilterText>
        {clearFilter && (
          <ClearFilterButton onClick={handleFilter}>
            Clear Filters
          </ClearFilterButton>
        )}
      </JobsHeader>
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
    </React.Fragment>
  );
};

export default Jobs;
