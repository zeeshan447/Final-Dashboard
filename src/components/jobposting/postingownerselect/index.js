import React, { useState, useEffect } from "react";
import { PostingOwnerSelect } from "./postingownerselect.style";
import Axios from "axios";
import { GETJOBOWNERS } from "../apis";

const PostingOwner = ({ jobPostingOwner, userId }) => {
  const { Option } = PostingOwnerSelect;
  let responseData = [];
  const [getHiringManager, setHiringManager] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get(GETJOBOWNERS).then((response) => {
      responseData = response.data.jobOwner.map((row, key) => ({
        user_id: row.user_id,
        user_name: row.user_name,
        role_name: row.role_name,
      }));
    });

    setHiringManager(responseData);
  };

  function handleChange(value, id) {
    console.log(`selected ${value}`);
    jobPostingOwner(value);
    userId(id.id);
  }
  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <React.Fragment>
      <PostingOwnerSelect
        showSearch
        placeholder="Select Job Owner"
        onSearch={onSearch}
        onChange={handleChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {getHiringManager?.map((data, key) => {
          return (
            <Option value={data.user_name} id={data.user_id}>
              {data.user_name}
            </Option>
          );
        })}
      </PostingOwnerSelect>
    </React.Fragment>
  );
};

export default PostingOwner;
