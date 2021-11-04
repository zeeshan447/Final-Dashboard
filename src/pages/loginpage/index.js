import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoginImage from "../../images/LoginImage.png";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { notification } from "antd";

import Axios from "axios";
import {
  LoginMainPageDiv,
  LoginPageButton,
  LoginPageDiv,
  LoginPageImage,
  LoginPageImageDiv,
  LoginPageLogo,
  LoginPageMainDiv,
  LoginPageText,
  MicrosoftLogo,
  SignInButtonURL,
} from "./loginpage.style";
import peoplelogo from "../../images/peoplelogo.png";
import microsoftlogo from "../../images/microsoftlogo.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authConstanst } from "../../store/constants/authconstants";
const LoginPage = () => {
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [userRoleId, setUserRoleId] = useState();
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
  const [userRoleName, setUserRoleName] = useState();
  const [userRoleValue, setUserRoleValue] = useState();
  //let userDetailing = useSelector((state) => state.userDetails.userDetails);

  // const renderList = userDetails.map((data)=>{
  //   return userRoleId: data.userRoleId

  // })

  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log("location", location.search.split("=")[1]);
  //const accessCode = window.location.href.split("?")[1].split("=")[1];

  const getData = async () => {
    const res = await Axios.get(
      "http://peoplexdevapi.packagex.xyz/auth?redirect=https://peoplexdev.packagex.xyz"
    );
    console.log("response ", res.data.response);

    setUrl(res.data.response);
  };

  useEffect(() => {
    // getURL();
    // console.log("location", location.pathname);
    getData();

    checkLocalStorage();
  }, [location]);

  const checkLocalStorage = () => {
    if (localStorage.getItem("access_token") === null) {
      console.log("local Storage is empty");
      getURL();
    } else {
      console.log("local storage has something");
      dispatch({ type: "SUCCESS" });
    }
  };

  useEffect(() => {
    // console.log(userRoleId);
    // console.log(userId);
    // console.log(userName);
    // console.log(userRoleName);
    // console.log(userRoleValue);
  });

  const getURL = () => {
    if (window.location.href?.split("?")[1]?.split("=")[1]?.length === 0) {
      console.log("Empty String");
    } else if (window.location.href?.split("?")[1]?.split("=")[1]?.length > 1) {
      setCode(window.location.href?.split("?")[1]?.split("=")[1]);
    }
  };
  useEffect(() => {
    authenticateCode();
  }, [code]);
  const authenticateCode = async () => {
    debugger;
    if (code?.length === 0) {
      console.log("Code not found");
    } else {
      await Axios.get(
        `https://peoplexdevapi.packagex.xyz/auth/callback?code=${code}&redirect=https://peoplexdev.packagex.xyz`
      )
        .then((res) => {
          if (res.data.statusCode === 200) {
            console.log("authentication response", res);

            setAccessToken(res.data.token);
            console.log("LOGIN RESPONSE", res);
            //userDetails = res.data;
            let details = res.data;
            dispatch({ type: "USER_DETAILS", payload: details });
          } else {
            notification.open({
              message: "Sign In Faied",
              description:
                "Failed to sign in. User has not been registered yet",
              onClick: () => {
                console.log("Notification Clicked!");
              },
            });
          }

          //console.log("USER DETAILS", userDetails);
        })
        .catch((err) => {
          notification.open({
            message: "Sign In Faied",
            description: "Failed to sign in. User has not been registered yet",
            onClick: () => {
              console.log("Notification Clicked!");
            },
          });
        });
    }
  };
  console.log("Access Token", accessToken);
  useEffect(() => {
    setTokenInLocalStorage();
  }, [accessToken, code]);
  const setTokenInLocalStorage = () => {
    if (accessToken === "") {
      console.log("No Access Token");
    } else {
      localStorage.setItem("access_token", accessToken);

      dispatch({ type: "SUCCESS" });
    }
  };
  console.log("access code", code);
  return (
    <React.Fragment>
      <LoginMainPageDiv>
        <LoginPageImageDiv>
          <LoginPageImage src={LoginImage} alt="logoImage"></LoginPageImage>
        </LoginPageImageDiv>
        <LoginPageMainDiv>
          <LoginPageDiv>
            <LoginPageLogo src={peoplelogo} alt="Logo" />
            <LoginPageText>Sign In To PeopleX</LoginPageText>
            <LoginPageButton onClick={getData}>
              <SignInButtonURL href={url}>
                <MicrosoftLogo
                  src={microsoftlogo}
                  alt="microsoftlogo"
                ></MicrosoftLogo>
                SIGN IN WITH MICROSOFT
              </SignInButtonURL>
            </LoginPageButton>
          </LoginPageDiv>
        </LoginPageMainDiv>
      </LoginMainPageDiv>
    </React.Fragment>
  );
};

export default LoginPage;
