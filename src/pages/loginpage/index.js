import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoginImage from "../../images/LoginImage.png";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

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
    const res = await Axios.get("http://localhost:2500/auth/outlook");
    console.log("response ", res.request.responseURL);

    setUrl(res.request.responseURL);
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
        `http://localhost:2500/auth/outlook/redirect/?code=${code}`
      ).then((res) => {
        console.log("authentication response", res);
        setAccessToken(res.data.token);
        console.log("LOGIN RESPONSE", res);
        //userDetails = res.data;
        let details = res.data;
        dispatch({ type: "USER_DETAILS", payload: details });
        //console.log("USER DETAILS", userDetails);
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
      localStorage.setItem(
        "access_token",
        "eyJ0eXAiOiJKV1QiLCJub25jZSI6IldTT25jVy1sZ2k0WFotWDNQV3JNcE1BUTRtSnE3RGJjMG9XYUZaazlUc2siLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ODE1YmNmNS1iZjExLTQzNDgtOGUzMS1jNTEyMjU0OTk0YjcvIiwiaWF0IjoxNjM0OTY3NzM3LCJuYmYiOjE2MzQ5Njc3MzcsImV4cCI6MTYzNDk3MTYzNywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhUQUFBQXlxVFY0anlBUm9FdU9RNzJnWTY0R2g2aWdUVnBFR0RSVDk1WjRVQk1DdllzSE9VSTBjK0wvM0IxU25KY0JhSXRwTW9pSFlMbVNsK0l2RXZIRU9USG5RPT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcF9kaXNwbGF5bmFtZSI6IlBlb3BsZVgiLCJhcHBpZCI6IjMzNDFkNzk0LTI3MDItNGZhMS1iZmM3LWE1ZDFjOTU1M2U3YiIsImFwcGlkYWNyIjoiMSIsImZhbWlseV9uYW1lIjoiQW53YXIiLCJnaXZlbl9uYW1lIjoiWmVlc2hhbiIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjM5LjQxLjExLjE5NiIsIm5hbWUiOiJaZWVzaGFuIEFud2FyIiwib2lkIjoiNzY0Y2IwMzEtY2Q0MS00ZDdjLTllZGYtZjIxMmQxODUxMGMwIiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAxNzY4RkJENzUiLCJyaCI6IjAuQVRrQTlid1ZTQkdfU0VPT01jVVNKVW1VdDVUWFFUTUNKNkZQdjhlbDBjbFZQbnM1QUlZLiIsInNjcCI6Im9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInN1YiI6IlUzUnFKeVpwQlhUVS1fdHpHUWVZYU45RFlLMG1kRmV5ZTFocTNXQnl2NnMiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiRVUiLCJ0aWQiOiI0ODE1YmNmNS1iZjExLTQzNDgtOGUzMS1jNTEyMjU0OTk0YjciLCJ1bmlxdWVfbmFtZSI6InplZXNoYW4uYW53YXJAdmlzaW9ueC5pbyIsInVwbiI6InplZXNoYW4uYW53YXJAdmlzaW9ueC5pbyIsInV0aSI6IkJGVkdzU29TbDBxXzVYdHN6WTF1QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoieHduanI1cnhiVTgtUGVTa2dMWTBRbDgxa2dobnI5d2g0Nl9fZFIySU5MTSJ9LCJ4bXNfdGNkdCI6MTU1Njg2NDA3M30.qMp7RzLrAkN-XSaKhE2h36QY140heDZNDiK63ctq_bAXsl3JRiRpRxz3-xR_xPYf5M3wPpTcuO7ns8r32HCAZamYf4RnTD-oWyaxWC9FKCb1zY3S_DgkgYICnIojAXfBLrxu3nMLhRLNcKD0QkKmFSFrKHjRWd5bhmCCXz_P5vf7GUsh9_Bbkta0bbREELtxf9qRBugdNzE2-rEE0OSdmXh8cM3rxn8ctKeYraLy_21NmubPL5cDhIOMzJh3oOktTG50JjwCSo8n6QHMqeQyWBgCtcT0B_M4FN7-jxiHNJdfL-WQ2icV2LxrxO2TVzRsYhWsh8HMxSJ6vaqC7KhdiQ"
      );
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
