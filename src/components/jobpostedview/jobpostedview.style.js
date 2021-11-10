import styled from "styled-components";

export const JobViewTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  background: #ffffff;
  box-shadow: 0px 4px 45px rgba(0, 0, 0, 0.06);
`;
export const JobTitle = styled.h1`
  font-family: Mulish;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 24px;
  color: #000000;
`;

export const JobTitleLocationDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const JobTitleLocation = styled.h2`
  font-family: Mulish;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 24px;
  color: #55565a;
`;

export const JobViewDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  height: 700px;
`;

export const JobInfoDetailsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  margin-top: 4%;
`;

export const JobViewOwnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
`;

export const JobViewOwnerTitle = styled.h2`
  font-family: Mulish;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 36px;
`;

export const JobViewOwnerName = styled.h2`
  font-family: Mulish;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 37.5px;
`;

export const JobViewDescription = styled.p`
  font-family: Mulish;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 640px;
  text-align: left;
  color: #000000;
  h3 {
    font-weight: 700;
  }
`;

export const JobViewApplyNowButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const JobViewApplyNowButton = styled.button`
  width: 944px;
  height: 56px;
  background: #38a6f5;
  border-radius: 8px;
  font-family: Mulish;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
`;
