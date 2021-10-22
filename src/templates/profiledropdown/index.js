import React from "react";
import Profilepic from "../../images/Profilepic.jpg";
import {
  Image,
  UserNameDropdown,
  UserNameDropdownDiv,
  UserRoleDropdown,
} from "./profiledropdown.style";
import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import {
  PoweroffOutlined,
  SettingOutlined,
  ExclamationCircleOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import Axios from "axios";

function handleMenuClick(e) {
  //   message.info("Click on menu item.");
  //   console.log("click", e);
}

const ProfilePicture = () => {
  const logoutHandler = async () => {
    await Axios.get("http://localhost:2500/auth/outlook/logout").then((res) => {
      console.log("LOGOUT RESPONSE", res);
      //localStorage.removeItem("access_token")
    });
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" style={{ width: "191px" }} disabled>
        <UserNameDropdownDiv>
          <UserNameDropdown>Ali Haider</UserNameDropdown>
          <UserRoleDropdown>Limited Team Member</UserRoleDropdown>
        </UserNameDropdownDiv>
      </Menu.Item>

      <Menu.Item key="2" style={{ width: "300px" }} icon={<SettingOutlined />}>
        <Link to="/edituser">Settings </Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<ExclamationCircleOutlined />}>
        Help Center{" "}
      </Menu.Item>
      <Menu.Item key="4" icon={<MessageOutlined />}>
        Support{" "}
      </Menu.Item>
      <Menu.Item onClick={logoutHandler} key="5" icon={<PoweroffOutlined />}>
        Log Out
      </Menu.Item>
    </Menu>
  );

  return (
    <React.Fragment>
      <Dropdown overlay={menu} arrow>
        <Image src={Profilepic} alt="profile picture"></Image>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfilePicture;
