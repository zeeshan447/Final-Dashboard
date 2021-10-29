import React, { useState, useEffect } from "react";
import { notification } from "antd";

import {
  AddCandidateAddNoteButton,
  AddCandidateDiv,
  AddCandidateNoteDiv,
  AddCandidateNoteInput,
  AddCandidateNoteInputDiv,
  AddCandidateStageSelect,
  AddCandidateScheduleButtonsDiv,
  AddCandidateScheduleButtons,
  AddCandidateTabsDiv,
} from "./addcandidate.style";
import CandidateStageSelect from "./candidatestageselect";
import AddCandidateBody from "./addcandidatebody";
import Axios from "axios";
import { ADD_CANDIDATE } from "./apis";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const AddCandidate = () => {
  const [getInputSize, setInputSize] = useState("");
  const [getOnFocus, setOnFocus] = useState(false);
  const [getNote, setNote] = useState();
  const [getName, setName] = useState();
  const [getCompanyName, setCompanyName] = useState();
  const [getResume, setResume] = useState();
  const [getEmail, setEmail] = useState();
  const [getPhone, setPhone] = useState();
  const [jobId, setJobId] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [address, setAddress] = useState();
  const dispatch = useDispatch();
  const pageReload = useSelector((state) => state.addCandidates.reloadPage);

  const onFocusHandler = () => {
    setOnFocus(true);
    setInputSize("active");
  };
  const submitNoteHandler = () => {
    setOnFocus(false);
    setInputSize("null");
  };
  const onBlurHandler = () => {
    setOnFocus(false);
  };

  useEffect(() => {
    console.log("Name", getName);
    console.log("Company Name", getCompanyName);
    console.log("Resume", getResume);
    dispatch({ type: "DEFAULT" });
    console.log("response from redux", pageReload);
  }, []);
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  const candidateAddHandler = async () => {
    debugger;
    await Axios.post(ADD_CANDIDATE, {
      candidate_name: getName,
      prev_company: getCompanyName,
      email: getEmail,
      phone: getPhone,
      notes: getNote,
      cv: getResume,
      applied_post: jobTitle,
      address: address,
    }).then((response) => {
      if (
        getName &&
        getCompanyName &&
        getPhone &&
        getNote &&
        jobTitle &&
        getResume &&
        address === ""
      ) {
        notification.open({
          message: "Error missing Fields",
          description: "Please fill all fields",
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
      } else {
        console.log("asdsadsadsadsadsad ", response);
        dispatch({ type: "RELOAD" });

        notification.open({
          message: "Added Successfully",
          description: "Candidate has been added successfully",
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
      }
    });
  };
  const noteChangeHandler = (e) => {
    setNote(e.target.value);
  };

  return (
    <React.Fragment>
      <AddCandidateDiv>
        <AddCandidateNoteDiv>
          <AddCandidateNoteInputDiv active={getOnFocus}>
            <AddCandidateNoteInput
              placeholder="Add Note"
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              active={getOnFocus}
              onChange={noteChangeHandler}
            />
            {getOnFocus && (
              <AddCandidateAddNoteButton onClick={submitNoteHandler}>
                Add Note
              </AddCandidateAddNoteButton>
            )}
          </AddCandidateNoteInputDiv>
        </AddCandidateNoteDiv>
        <AddCandidateStageSelect>
          <CandidateStageSelect />
        </AddCandidateStageSelect>
        <AddCandidateScheduleButtonsDiv>
          <AddCandidateScheduleButtons onClick={candidateAddHandler}>
            + Add Candidate
          </AddCandidateScheduleButtons>
        </AddCandidateScheduleButtonsDiv>
      </AddCandidateDiv>
      <AddCandidateTabsDiv>
        <AddCandidateBody
          candidateName={setName}
          candidateCompany={setCompanyName}
          candidateResume={setResume}
          candidateEmail={setEmail}
          candidatePhone={setPhone}
          candidateJob={setJobTitle}
          candidateJobId={setJobId}
          candidateLocation={setAddress}
        />
      </AddCandidateTabsDiv>
    </React.Fragment>
  );
};

export default AddCandidate;
