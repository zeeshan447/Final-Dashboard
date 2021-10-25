import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Button, notification } from "antd";

import {
  ScheduleDatePicker,
  ScheduleTimePicker,
  ScheduleTable,
  IntervalInput,
  MinsLabel,
  MinsIntervalDiv,
  AddInterviewCallDiv,
  AddInterviewButton,
  DeleteRowButton,
  ScheduleButtonDiv,
  DiscardButton,
  ScheduleButton,
  ScheduleCallButton,
} from "./candidateschedule.style";
import moment from "moment";
import { Popconfirm } from "antd";
import InterviewerSelect from "./candidateinterviewerselect";
import FeedbackFormSelect from "../feedbackformselect";
import MeetingLocation from "../meetinglocationselect";
import { DeleteOutlined, PhoneOutlined } from "@ant-design/icons";
import { SCHEDULE_INTERVIEW } from "../apis";
const data = [
  {
    key: "1",
    date: "",
    time: "32",
    interviewer: "New York No. 1 Lake Park",
    feedbackform: "nice",
  },
];
const CandidateSchedule = ({ modalVisibility, scheduledCandidateData }) => {
  //const [count, dataSource] = useState();

  const [getData, setData] = useState(data);
  const [getCount, setCount] = useState(2);
  const [time, setTime] = useState([]);
  const [date, setDate] = useState("");
  const [dateId, setdateId] = useState();
  const [getInterval, setInterval] = useState("");
  const [getInterviewer, setInterviewer] = useState([]);
  const [interviewType, setInterviewType] = useState();

  const onDateChange = (date, dateString) => {
    setDate(dateString);
    console.log(date, dateString);
  };
  const idHandler = (id, index) => {
    console.log("lkasdkjsad", id);
    console.log("index", index);

    setdateId(id);
  };
  const intervalHandler = (e) => {
    setInterval(e.target.value);
  };

  const onTimeChange = (time, timeString) => {
    setTime(timeString);
    console.log(time, timeString);
  };
  useEffect(() => {
    console.log("new data", getData);
  }, [date]);

  useEffect(() => {
    console.log("Interviewer Names", getInterviewer);
    console.log("candidate who needs to be scheduled", scheduledCandidateData);
  });

  const addRowHandler = () => {
    const newData = {
      key: getCount,
      date: "",
      time: 32,
      interviewer: "New York No. 1 Lake Park",
      feedbackform: "nice",
    };

    setData([...getData, newData]);
    setCount(getCount + 1);
  };
  const handleDelete = (key) => {
    setData(getData.filter((item) => item.key !== key));
  };

  const columns = [
    {
      dataIndex: "date",
      key: "date",
      render: (text, record, index) => (
        <ScheduleDatePicker
          onChange={onDateChange}
          onClick={() => idHandler(record.key, index)}
        />
      ),
      width: "10%",
    },
    {
      dataIndex: "time",
      key: "time",
      render: (text, record, index) => (
        <ScheduleTimePicker
          onChange={onTimeChange}
          onClick={() => idHandler(record.key, index)}
        />
      ),
      width: "10%",
    },
    {
      dataIndex: "interval",
      key: "interval",
      render: () => (
        <IntervalInput
          type="number"
          placeholder=" Interval In Mins"
          onChange={intervalHandler}
        />
      ),
      width: "10%",
    },
    {
      key: "interviewer",
      dataIndex: "interviewer",
      render: (text) => <InterviewerSelect interviwersName={setInterviewer} />,
      width: "40%",
    },
    {
      key: "feedbackform",
      render: (text) => <FeedbackFormSelect typeInterview={setInterviewType} />,
      width: "10%",
    },
    {
      key: "meetinglocation",
      dataIndex: "meetinglocation",
      render: (text) => <MeetingLocation />,
      width: "10%",
    },
    {
      key: "delete",
      dataIndex: "delete",
      render: (text, record) =>
        // <DeleteRowButton>
        //   <DeleteOutlined style={{ color: "red", fontSize: 16 }} />
        // </DeleteRowButton>
        getData.length >= 2 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <DeleteOutlined style={{ color: "red", fontSize: 16 }} />
          </Popconfirm>
        ) : null,
    },
  ];

  const modalCloseHandler = () => {
    modalVisibility(false);
  };

  const scheduleHandler = async () => {
    if (
      time.length &&
      date.length &&
      getInterval.length &&
      getInterviewer.length === 0
    ) {
      alert("Please Fill in all the values");
    }
    if (
      time.length &&
      date.length &&
      getInterval.length &&
      getInterviewer.length !== 0
    ) {
      //modalVisibility(false);
      await Axios.post(SCHEDULE_INTERVIEW, [
        {
          scheduled_time: time,
          feedback: "Gooooooodd",
          stage: scheduledCandidateData.stage,
          user_id: getInterviewer,
          candidate_job_maping_id:
            scheduledCandidateData.candidate_job_maping_id,
          status: "PENDING",
          schedule_date: date,
          duration: getInterval,
          location: null,
          interview_type: interviewType,
        },
      ]).then((response) => {
        console.log("Interview has been scheduled", response);
        notification.open({
          message: "Interview Schedule",
          description: "Interview Scheduled Successfully",
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
      });
    } else {
      alert("Please Fill in all the values");
    }
  };

  console.log("getData >", getData);
  return (
    <React.Fragment>
      <ScheduleTable
        columns={columns}
        dataSource={getData}
        pagination={false}
      ></ScheduleTable>
      <AddInterviewCallDiv>
        <AddInterviewButton onClick={addRowHandler}>
          + Add Interview
        </AddInterviewButton>
        <ScheduleCallButton>
          <PhoneOutlined style={{ color: "white", fontSize: 16, margin: 5 }} />{" "}
          Schedule a call
        </ScheduleCallButton>
      </AddInterviewCallDiv>
      <ScheduleButtonDiv>
        <DiscardButton onClick={modalCloseHandler}>
          <DeleteOutlined style={{ color: "white", fontSize: 16, margin: 5 }} />
          Discard
        </DiscardButton>
        <ScheduleButton onClick={scheduleHandler}>Schedule</ScheduleButton>
      </ScheduleButtonDiv>
    </React.Fragment>
  );
};

export default CandidateSchedule;
