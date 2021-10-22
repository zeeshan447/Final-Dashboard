import React, { useState, useEffect } from "react";
import { PostingOwnerSelect } from "./hiringmanager.style";
import Axios from "axios";
import { GETALLUSERS } from "../apis";

const HiringManagerSelect = ({ hiringManagerName }) => {
  const { Option } = PostingOwnerSelect;
  let responseData = [];
  const [getHiringManager, setHiringManager] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get(GETALLUSERS).then((response) => {
      responseData = response.data.data.map((row, key) => ({
        key: row.user_id,
        user_name: row.user_name,
        email: row.email,
        role_name: row.role_name,
      }));
    });

    setHiringManager(responseData);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
    hiringManagerName(value);
  }
  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <React.Fragment>
      <PostingOwnerSelect
        showSearch
        placeholder="Select Manager"
        onSearch={onSearch}
        onChange={handleChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {getHiringManager?.map((data, key) => {
          return <Option value={data.user_name}>{data.user_name}</Option>;
        })}
      </PostingOwnerSelect>
    </React.Fragment>
  );
};

export default HiringManagerSelect;
