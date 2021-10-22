import styled from "styled-components";
import { Select } from "antd";
import { Input } from "antd";

export const AddCandidateBodyDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddCandidateDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

// export const AddCandidateNameInput = styled.input`
//   width: 528px;
//   height: 40px;
//   border-radius: 8px;
//   font-family: mulish;
//   font-size: 18px;
//   line-height: 24px;
//   padding-left: 2%;
//   outline: none;
//   border: 1px solid #d9d9d9;
//   ::placeholder {
//     font-family: mulish;
//     font-size: 18px;
//     line-height: 24px;
//     color: #7a869a;
//   }
// `;

export const CandidateName = styled.h1`
  font-family: Mulish;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 20px;

  color: #000000;
`;

export const CandidateCompany = styled.h2`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 20px;
  /* identical to box height, or 83% */

  color: #000000;
`;

export const AddCandidateJobDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 532px;
  height: 122px;
  background-color: #f4f5f7;
  margin-top: 4%;
  border-radius: 8px;
`;

export const AddCandidateJobTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 3%;
  margin-top: 3%;
`;

export const AddCandidateJobTitle = styled.h1`
  font-family: mulish;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: #344563;
`;

export const AddCandidateJobSelect = styled(Select)`
  width: 98.48px;
  height: 37px;
  border-radius: 8px;
  color: white;
  margin-right: 3%;

  .ant-select-selection-placeholder {
    /* background-color: #38a6f5; */
    color: white !important;
    font-family: mulish !important;
    font-size: 14px !important;
    line-height: 20px !important;
    cursor: pointer !important;
    text-align: center !important;
    padding-top: 7% !important;
  }
  .ant-select-selection-search {
    /* background-color: #38a6f5; */
    color: white !important;
    font-family: mulish !important;
    font-size: 14px !important;
    line-height: 20px !important;
    cursor: pointer !important;
  }
  .ant-select-selector {
    background-color: #38a6f5 !important;
    color: white !important;
    height: 40px !important;
    overflow: auto !important;
    padding-left: 15% !important;
    padding-top: 2% !important;
    font-family: mulish !important;
    font-size: 14px !important;
    line-height: 20px !important;
    cursor: pointer !important;
  }
  .ant-select-arrow {
    color: white !important;
    padding-top: 1% !important;
    font-size: 12px;
  }
`;

export const AddcandidateReferredDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CandidateCreated = styled.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  margin-right: 3%;
  margin-top: 3%;
`;
export const AddCandidateSourced = styled.div`
  width: 54px;
  height: 16px;
  border-radius: 3px;
  background-color: #42526e;
  font-family: Mulish;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  margin-left: 3%;
  margin-top: 3%;
`;
export const AddOpportunityDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border-left: 1px solid #c8ced1;
`;

export const OpportunitiesTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #c8ced1;
  margin-left: 4%;
`;

export const OpportunitiesTitle = styled.h2`
  width: 105px;
  height: 24px;
  font-family: mulish;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #55565a;
`;

export const OpportunitesAddButton = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-top: 2%;
`;

export const OpportunityDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 4%;
  margin-top: 2%;
`;

export const OpportunityCardBlue = styled.div`
  width: 4%;
  background-color: #0165ff;
  height: 92px;
  border-radius: 8px 0px 0px 8px;
`;

export const OpportunityCard = styled.div`
  width: 96%;
  height: 92px;
  background-color: #ffffff;
  box-shadow: 0px 6px 8px 0px #9d9d9d;
  border-radius: 0px 8px 8px 0px;
`;
export const GeneralOpportunityTag = styled.h3`
  width: 275.83px;
  height: 43.42px;
  font-family: mulish;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #6b778c;
  margin-left: 4%;
  margin-top: 4%;
`;

export const AddLinksTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #c8ced1;
  margin-left: 4%;
  margin-top: 8%;
`;

export const AddLinkTitle = styled.h2`
  width: 105px;
  height: 24px;
  font-family: mulish;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #55565a;
`;

export const AddLinkButton = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-top: 2%;
`;
export const AddLinkBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: mulish;
  font-weight: 400;
  font-size: 12.64px;
  line-height: 24px;
  color: #000000;
  margin-left: 4%;
`;

export const InfoBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoInput = styled(Input)`
  border: none;
  outline: none;
  margin-top: 2%;
`;
