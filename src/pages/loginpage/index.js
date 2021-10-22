import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoginImage from "../../images/LoginImage.png";
import { Route, Redirect } from "react-router-dom";
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
    if (code?.length === 0) {
      console.log("Code not found");
    } else {
      await Axios.get(
        `http://localhost:2500/auth/outlook/redirect/?code=${code}`
      ).then((res) => {
        console.log("authentication response", res);
        setAccessToken(res.data.token);
        console.log("LOGIN RESPONSE", res);
      });
    }
  };
  console.log("Access Token", accessToken);

  useEffect(() => {
    setTokenInLocalStorage();
  }, [accessToken]);
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
                SIGN IN WITH MICROSFT
              </SignInButtonURL>
            </LoginPageButton>
          </LoginPageDiv>
        </LoginPageMainDiv>
      </LoginMainPageDiv>
    </React.Fragment>
  );
};

export default LoginPage;
