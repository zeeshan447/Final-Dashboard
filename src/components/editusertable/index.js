import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import "./editusertable.css";
import Axios from "axios";
import { Columns, DataSource } from "./editusertablecolumns";
import { Modal } from "antd";
import UserDetails from "../userdetails";

const EditUserTable = () => {
  const [loading, setLoading] = useState(true);
  const [getUsers, setGetUsers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [users, setUsers] = useState();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    getData();
    const response = Axios.get("https://peoplexdev.packagex.xyz/user");
    console.log("response", response);
  }, []);

  const getData = async () => {
    await Axios.get("https://peoplexdev.packagex.xyz/user").then((res) => {
      setLoading(false);
      setGetUsers(
        res.data.data.map((row, key) => ({
          key: row.user_id,
          user_name: row.user_name,
          email: row.email,
          role_name: row.role_name,
        }))
      );
    });
  };

  console.log("users", getUsers);

  return (
    <div>
      <Table
        className="table-settings"
        columns={Columns}
        ellipsize={true}
        dataSource={getUsers}
        pagination={false}
        onRow={(record) => ({
          onClick: (event) => {
            console.log("Row Selceted", record);
            setIsModalVisible(true);

            setUsers(record);
          },
        })}
      ></Table>
      <Modal
        visible={isModalVisible}
        width={560}
        title="Add User"
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
      >
        <UserDetails userDetails={users}></UserDetails>
      </Modal>
    </div>
  );
};

export default EditUserTable;
