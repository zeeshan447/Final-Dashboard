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

const AddCandidate = ({ candidateModal }) => {
  const [getInputSize, setInputSize] = useState("");
  const [getOnFocus, setOnFocus] = useState(false);
  const [getNote, setNote] = useState();
  const [getName, setName] = useState("");
  const [getCompanyName, setCompanyName] = useState();
  const [getResume, setResume] = useState();
  const [getEmail, setEmail] = useState();
  const [getPhone, setPhone] = useState();
  const [jobId, setJobId] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [address, setAddress] = useState();
  const [hiringId, setHiringId] = useState();
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
    console.log("JOBTITLE", jobTitle);
    console.log("response from redux", pageReload);
  }, []);

  const candidateAddHandler = async () => {
    if (
      getName &&
      getCompanyName &&
      getPhone &&
      getNote &&
      jobTitle &&
      getResume &&
      address === undefined
    ) {
      notification.open({
        message: "Error missing Fields",
        description: "Please fill all fields",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    } else {
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
        user_id: hiringId,
      })
        .then((response) => {
          console.log("STATUS CODE", response.request.status);
          if (response.request.status === 200) {
            notification.open({
              message: "Adding Candidate Failed",
              description: "Please check all the  fields",
              onClick: () => {
                console.log("Notification Clicked!");
              },
            });
          } else {
            notification.open({
              message: "Successfully Added",
              description: "Candidate Added Successfully",
              onClick: () => {
                console.log("Notification Clicked!");
              },
            });
            dispatch({ type: "RELOAD" });
            console.log("asdsadsadsadsadsad ", response);
            candidateModal(false);
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
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
          managerId={setHiringId}
        />
      </AddCandidateTabsDiv>
    </React.Fragment>
  );
};

export default AddCandidate;
