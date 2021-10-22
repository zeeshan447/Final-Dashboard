import styled from "styled-components";
import { DatePicker, TimePicker, Table, Input } from "antd";

export const ScheduleDatePicker = styled(DatePicker)`
  width: 150px;
  height: 40px;
  border-radius: 8px;
`;

export const ScheduleTimePicker = styled(TimePicker)`
  width: 150px;
  height: 40px;
  border-radius: 8px;
`;

export const ScheduleTable = styled(Table)`
  .ant-table-row {
    background-color: #dfe1e6 !important;
  }
  .ant-table-cell {
    border-bottom: none !important;
  }

  .ant-table-tbody > tr > td {
    padding: 0.8rem 0.3rem !important;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background-color: unset !important;
  }
`;

export const IntervalInput = styled(Input)`
  width: 150px;
  height: 40px;
`;

export const MinsLabel = styled.h3`
  font-size: 12px;
  font-family: mulish;
  color: black;
`;

export const MinsIntervalDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddInterviewCallDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5%;
`;

export const AddInterviewButton = styled.button`
  width: 164px;
  height: 40px;
  background: #dfe1e6;
  border-radius: 8px;
  font-family: Mulish;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #55565a;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ScheduleCallButton = styled.button`
  width: 164px;
  height: 40px;
  background: transparent;
  border-radius: 8px;
  font-family: Mulish;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
`;
export const DeleteRowButton = styled.div`
  cursor: pointer;
`;

export const ScheduleButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 5%;
`;

export const DiscardButton = styled.button`
  background: transparent;
  width: 119px;
  height: 36px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-family: Mulish;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ScheduleButton = styled.button`
  background: #40a9ff;
  width: 119px;
  height: 36px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-family: Mulish;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
`;
