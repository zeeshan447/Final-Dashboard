import React, { useEffect, useState } from "react";
import {
  TagOutlined,
  MergeCellsOutlined,
  ShareAltOutlined,
  FlagOutlined,
  DownOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { FilterButtonDiv, FilterButtons } from "./filterbuttons.style";
import { Tooltip } from "antd";
import { Menu, Dropdown } from "antd";
import Axios from "axios";

const CustomTableFilters = ({ rowData, apiCall, secondApiCall }) => {
  const [rowItems, setRowItems] = useState([]);

  const reviewChangeHandler = async () => {
    // const response = await Axios.put("http://localhost:2500/can/status", {
    //   candidate_id: rowData[0].key,
    //   job_id: rowData[0].job_id,
    //   stage: "REVIEW",
    // });

    await Axios.put(
      "http://localhost:2500/can/status",
      rowData.map((row, key) => ({
        candidate_id: row.key,
        job_id: row.job_id,
        stage: "REVIEW",
      }))
    ).then((res) => {
      console.log("response", res);
    });
    apiCall(!secondApiCall);
  };
  const phoneChangeHandler = async () => {
    // const response = await Axios.put("http://localhost:2500/can/status", {
    //   candidate_id: rowData[0].key,
    //   job_id: rowData[0].job_id,
    //   stage: "PHONE SCREEN",
    // });

    await Axios.put(
      "http://localhost:2500/can/status",
      rowData.map((row, key) => ({
        candidate_id: row.key,
        job_id: row.job_id,
        stage: "PHONE SCREEN",
      }))
    ).then((res) => {
      console.log("response", res);
    });
    apiCall(!secondApiCall);
  };
  const firstRoundChangeHandler = async () => {
    // const response = await Axios.put("http://localhost:2500/can/status", {
    //   candidate_id: rowData[0].key,
    //   job_id: rowData[0].job_id,
    //   stage: "REVIEW",
    // });

    await Axios.put(
      "http://localhost:2500/can/status",
      rowData.map((row, key) => ({
        candidate_id: row.key,
        job_id: row.job_id,
        stage: "FIRST ROUND",
      }))
    ).then((res) => {
      console.log("response", res);
    });
    apiCall(!secondApiCall);
  };
  const secondRoundChangeHandler = async () => {
    // const response = await Axios.put("http://localhost:2500/can/status", {
    //   candidate_id: rowData[0].key,
    //   job_id: rowData[0].job_id,
    //   stage: "REVIEW",
    // });

    await Axios.put(
      "http://localhost:2500/can/status",
      rowData.map((row, key) => ({
        candidate_id: row.key,
        job_id: row.job_id,
        stage: "SECOND ROUND",
      }))
    ).then((res) => {
      console.log("response", res);
    });
    apiCall(!secondApiCall);
  };
  const offeredChangeHandler = async () => {
    // const response = await Axios.put("http://localhost:2500/can/status", {
    //   candidate_id: rowData[0].key,
    //   job_id: rowData[0].job_id,
    //   stage: "REVIEW",
    // });

    await Axios.put(
      "http://localhost:2500/can/status",
      rowData.map((row, key) => ({
        candidate_id: row.key,
        job_id: row.job_id,
        stage: "OFFERED",
      }))
    ).then((res) => {
      console.log("response", res);
    });
    apiCall(!secondApiCall);
  };
  const hiredChangeHandler = async () => {
    // const response = await Axios.put("http://localhost:2500/can/status", {
    //   candidate_id: rowData[0].key,
    //   job_id: rowData[0].job_id,
    //   stage: "REVIEW",
    // });

    await Axios.put(
      "http://localhost:2500/can/status",
      rowData.map((row, key) => ({
        candidate_id: row.key,
        job_id: row.job_id,
        stage: "HIRED",
      }))
    ).then((res) => {
      console.log("response", res);
    });
    apiCall(!secondApiCall);
  };
  const menu = (
    <Menu>
      <Menu.Item onClick={reviewChangeHandler}>Review</Menu.Item>
      <Menu.Item onClick={phoneChangeHandler}>Phone Screen</Menu.Item>
      <Menu.Item onClick={firstRoundChangeHandler}>First Round</Menu.Item>
      <Menu.Item onClick={secondRoundChangeHandler}>Second Round</Menu.Item>
      <Menu.Item onClick={offeredChangeHandler}>Offered</Menu.Item>
      <Menu.Item onClick={hiredChangeHandler}>Hired</Menu.Item>
    </Menu>
  );
  useEffect(() => {
    setRowItems(rowData);
  });
  console.log("rowdata", rowData);
  //console.log("reviewdata", reviewData);

  return (
    <React.Fragment>
      <FilterButtonDiv>
        <Dropdown overlay={menu}>
          <Tooltip title="Stages">
            <FilterButtons>
              <FlagOutlined style={{ fontSize: "20px" }} />
            </FilterButtons>
          </Tooltip>
        </Dropdown>
        <Tooltip title="Archive">
          <FilterButtons>
            <InboxOutlined style={{ fontSize: "20px" }} />
          </FilterButtons>
        </Tooltip>
        <Tooltip title="Tags">
          <FilterButtons>
            <TagOutlined style={{ fontSize: "20px" }} />
          </FilterButtons>
        </Tooltip>
        <Tooltip title="Share">
          <FilterButtons>
            <ShareAltOutlined style={{ fontSize: "20px" }} />{" "}
          </FilterButtons>
        </Tooltip>
        <Tooltip title="Merge">
          <FilterButtons>
            <MergeCellsOutlined style={{ fontSize: "20px" }} />{" "}
          </FilterButtons>
        </Tooltip>
        <FilterButtons>
          <DownOutlined style={{ fontSize: "20px" }} />{" "}
        </FilterButtons>
      </FilterButtonDiv>
    </React.Fragment>
  );
};

export default CustomTableFilters;
