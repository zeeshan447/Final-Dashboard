import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import {
  ApplyNowInput,
  ApplyNowJobFormDiv,
  ApplyNowLabel,
  ApplyNowLinks,
  JobTitle,
  JobTitleLocation,
  JobTitleLocationDiv,
  JobViewTitleDiv,
  LabelInputDiv,
  LabelQuestionInputDiv,
} from "./applynowjob.style";
import {
  LinkedinFilled,
  TwitterCircleFilled,
  GithubFilled,
  DribbbleOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Radio, Space } from "antd";

const ApplyNowJob = () => {
  const { state } = useLocation();
  const [applyNow, setApplyNow] = useState();
  const [data, setData] = useState({});
  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const [value, setValue] = React.useState(1);

  const radioChangeHandler = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  useEffect(() => {
    getApplyNowData();
    console.log("STATE", state);
  }, []);

  const getJobID = window?.location?.pathname?.split("/")[2];

  const getApplyNowData = async () => {
    Axios.get(
      `https://peoplexdevapi.packagex.xyz/job/postedjobs/${getJobID}`
    ).then((res) => {
      setApplyNow(res.data.data);
    });
  };
  useEffect(() => {
    console.log("INPUT DATA", data);
  });
  console.log("APPLY NOW", applyNow);

  const jobTitle = applyNow?.map((data, key) => {
    return data.job_title;
  });

  return (
    <>
      {applyNow?.map((row, key) => {
        return (
          <>
            <JobViewTitleDiv>
              <JobTitle>{row.job_title}</JobTitle>
              <JobTitleLocationDiv>
                <JobTitleLocation>
                  {row.job_loc}, {""}/ {row.department_name}/ {row.worktype}
                </JobTitleLocation>
              </JobTitleLocationDiv>
            </JobViewTitleDiv>
          </>
        );
      })}

      <ApplyNowJobFormDiv>
        <LabelInputDiv>
          <ApplyNowLabel>Full Name</ApplyNowLabel>
          <ApplyNowInput
            type="text"
            name="name"
            onChange={onChange}
          ></ApplyNowInput>
        </LabelInputDiv>
        <LabelInputDiv>
          <ApplyNowLabel>Email</ApplyNowLabel>
          <ApplyNowInput
            type="text"
            name="email"
            onChange={onChange}
          ></ApplyNowInput>
        </LabelInputDiv>
        <LabelInputDiv>
          <ApplyNowLabel>Phone</ApplyNowLabel>
          <ApplyNowInput
            type="number"
            name="phone"
            onChange={onChange}
          ></ApplyNowInput>
        </LabelInputDiv>
        <LabelInputDiv>
          <ApplyNowLabel>Current Company</ApplyNowLabel>
          <ApplyNowInput
            type="text"
            name="company"
            onChange={onChange}
          ></ApplyNowInput>
        </LabelInputDiv>
        <LabelInputDiv>
          <ApplyNowLinks>Links</ApplyNowLinks>
        </LabelInputDiv>
        <LabelInputDiv>
          <ApplyNowLabel>
            <LinkedinFilled style={{ fontSize: 30 }} />
          </ApplyNowLabel>
          <ApplyNowInput></ApplyNowInput>
        </LabelInputDiv>
        <LabelInputDiv>
          <ApplyNowLabel>
            <TwitterCircleFilled style={{ fontSize: 30 }} />
          </ApplyNowLabel>
          <ApplyNowInput></ApplyNowInput>
        </LabelInputDiv>
        <LabelInputDiv>
          <ApplyNowLabel>
            <LinkedinFilled style={{ fontSize: 30 }} />
          </ApplyNowLabel>
          <ApplyNowInput></ApplyNowInput>
        </LabelInputDiv>
        <LabelInputDiv>
          <ApplyNowLabel>
            <GithubFilled style={{ fontSize: 30 }} />
          </ApplyNowLabel>
          <ApplyNowInput></ApplyNowInput>
        </LabelInputDiv>
        <LabelInputDiv>
          <ApplyNowLabel>
            <DribbbleOutlined style={{ fontSize: 30 }} />
          </ApplyNowLabel>
          <ApplyNowInput></ApplyNowInput>
        </LabelInputDiv>
        <LabelInputDiv>
          <ApplyNowLinks>{jobTitle}</ApplyNowLinks>
        </LabelInputDiv>
        <LabelQuestionInputDiv>
          <ApplyNowLabel>Expected Salary</ApplyNowLabel>
          <ApplyNowInput
            type="text"
            name="salary"
            onChange={onChange}
          ></ApplyNowInput>
        </LabelQuestionInputDiv>
        <LabelQuestionInputDiv>
          <ApplyNowLabel>Notice Period At Current Employeer</ApplyNowLabel>
          <ApplyNowInput
            type="text"
            name="notice_period"
            onChange={onChange}
          ></ApplyNowInput>
        </LabelQuestionInputDiv>
        <LabelQuestionInputDiv>
          <ApplyNowLabel>Total Experience</ApplyNowLabel>
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value="3-4 years">3-4 years</Radio>
              <Radio value="4-5 years">4-5 years</Radio>
              <Radio value="5 years or more">5 years or more</Radio>
            </Space>
          </Radio.Group>
        </LabelQuestionInputDiv>
      </ApplyNowJobFormDiv>
    </>
  );
};

export default ApplyNowJob;
