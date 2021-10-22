import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import DepartmentAndTeam from "./departmentandteams";

const CompanySettings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "company" });
  }, []);

  return <h1>Hello</h1>;
};

export default CompanySettings;
