import styled from "styled-components";

export const LoginMainPageDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const LoginPageImageDiv = styled.div`
  width: 50%;
  background-color: #63bdfd;
  position: relative;
`;
export const LoginPageImage = styled.img`
  width: 737.88px;
  height: 407px;
  z-index: 2;
  position: absolute;
  right: -55px;
  margin-top: 30%;
  @media screen and (min-width: 2560px) {
    width: 2070.57px;
    height: 1140.41px;
  }
`;

export const LoginPageMainDiv = styled.div`
  display: flex;
  max-width: 100%;
  width: 50%;
  z-index: 1;
  background-color: #fafbfc;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginPageLogo = styled.img`
  width: 71px;
  height: 71px;
`;

export const LoginPageText = styled.div`
  font-family: mulish;
  font-weight: 800;
  font-size: 31.25px;
  line-height: 22px;
  color: #55565a;
  margin-top: 60px;
  margin-left: 30px;
`;

export const LoginPageButton = styled.button`
  width: 313px;
  height: 63px;
  border-radius: 8px;
  border: none;
  color: #5e5e5e;
  font-family: "Segoe UI";
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  margin-top: 30px;
  margin-left: 29px;
  background-color: #ffffff;
  cursor: pointer;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 4px 12px 0px;
`;

export const MicrosoftLogo = styled.img`
  margin-right: 20px;
`;

export const SignInButtonURL = styled.a`
  text-decoration: none;
  color: #5e5e5e;
`;
