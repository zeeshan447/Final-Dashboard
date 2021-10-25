import React, { useState, useEffect } from "react";
import {
  AddFileDiv,
  AddResume,
  AddResumeLabel,
  AddResumeLabelDiv,
  ResumeFileDiv,
} from "./resumepreview.style";
import { Document, Page, pdfjs } from "react-pdf";

const ResumePreview = ({ cv }) => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");

  // for submit event
  const [viewPdf, setViewPdf] = useState(null);

  useEffect(() => {
    setPdfFile(cv.cv);

    console.log("CV", cv.cv);
  });
  // onchange event
  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("select your file");
    }
  };
  useEffect(() => {
    if (pdfFile === null) {
      console.log("null pdf file");
    } else {
      submitHandler();
    }
  }, [pdfFile]);

  // form submit
  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  const submitHandler = () => {
    // uploadPdf(pdfFile);
  };

  return (
    <React.Fragment>
      <div className="container">
        <br></br>
        <ResumeFileDiv>
          <form className="form-group" onSubmit={handlePdfFileSubmit}>
            <AddResumeLabelDiv>
              {pdfFile ? (
                <AddResumeLabel for="addresume">
                  <a href={pdfFile}>Preview Resume</a>
                </AddResumeLabel>
              ) : (
                <AddResumeLabel for="addresume" onChange={handlePdfFileChange}>
                  Add Resume{" "}
                </AddResumeLabel>
              )}
              <AddResume
                id="addresume"
                type="file"
                required
                onChange={handlePdfFileChange}
              />
            </AddResumeLabelDiv>
            {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
            <br></br>
          </form>
          <AddFileDiv>
            <form className="form-group" onSubmit={handlePdfFileSubmit}>
              <AddResumeLabelDiv>
                <AddResumeLabel for="addresume" onChange={handlePdfFileChange}>
                  Add File
                </AddResumeLabel>

                <AddResume
                  id="addresume"
                  type="file"
                  required
                  onChange={handlePdfFileChange}
                />
              </AddResumeLabelDiv>
              {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
              <br></br>
            </form>
          </AddFileDiv>
        </ResumeFileDiv>

        <br></br>
      </div>
    </React.Fragment>
  );
};

export default ResumePreview;
