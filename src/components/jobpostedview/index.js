import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import { GETJOBBYID } from "./apis";

const JobPostedView = () => {
  const { state } = useLocation();
  const [jobDetail, setJobDetail] = useState();

  useEffect(() => {
    getJobData();
  }, []);

  const getJobData = async () => {
    await Axios.get(`https://peoplexdevapi.packagex.xyz/job/${state.jobId}`)
      .then((res) => {
        console.log(res);
        setJobDetail(res);
      })
      .catch((err) => {
        alert("ERROR FROM SERVER");
      });
  };

  return <div>{state.jobId}</div>;
};

export default JobPostedView;
