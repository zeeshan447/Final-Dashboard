import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import {
  ResumeFileDiv,
  AddResumeLabelDiv,
  ResumeInput,
  AddResumeLabel,
  DisplayingPath,
  PdfFileError,
} from "./testfileupload.style";

function FileUpload({ uploadPdf, url }) {
  const [file, setFile] = useState(""); // storing the uploaded file
  // storing the recived file from backend
  const [data, getFile] = useState({ name: "", path: "" });
  const [progress, setProgess] = useState(0); // progess bar
  const [cvUrl, setCvUrl] = useState();
  const [pdfFileError, setPdfFileError] = useState("");
  const fileType = ["application/pdf"];

  const el = useRef(); // accesing input element

  const handleChange = (e) => {
    setProgess(0);
    const selectedFile = e.target.files[0]; // accessing file
    console.log(file);
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setFile(selectedFile);
          setPdfFileError("");
        };
      } else {
        setFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("select your file");
    }
  };
  useEffect(() => {
    url(cvUrl);
  });
  useEffect(() => {
    uploadFile();
  }, [file]);
  const uploadFile = () => {
    if (file?.length === 0) {
      console.log("FILE NO SELECTED");
    } else {
      const formData = new FormData();
      formData.append("cv", file);

      uploadPdf(formData);

      axios
        .post("https://peoplexdev.packagex.xyz/uploadcv", formData)
        .then((res) => {
          console.log("ajsdkjanskjdsa", res);
          setCvUrl(res.data.url);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <ResumeFileDiv>
        <AddResumeLabelDiv>
          {file ? (
            <AddResumeLabel for="addresume">
              {/* {data.path && <DisplayingPath src={data.path} alt={data.name} />} */}
              Resume Selected
            </AddResumeLabel>
          ) : (
            <AddResumeLabel for="addresume">Choose Resume</AddResumeLabel>
          )}

          <ResumeInput
            id="addresume"
            type="file"
            ref={el}
            onChange={handleChange}
          />
          {/* <button onClick={uploadFile} className="upbutton">
            Upload
          </button> */}
          {/* displaying received image*/}
          {/* {data.path && <img src={data.path} alt={data.name} />} */}
        </AddResumeLabelDiv>
      </ResumeFileDiv>
      {pdfFileError && <PdfFileError>{pdfFileError}</PdfFileError>}
    </>
  );
}

export default FileUpload;

// import React, { useRef, useState, useEffect } from "react";
// import axios from "axios";

// function FileUpload({ uploadPdf, url }) {
//   const [file, setFile] = useState(""); // storing the uploaded file
//   // storing the recived file from backend
//   const [data, getFile] = useState({ name: "", path: "" });
//   const [progress, setProgess] = useState(0); // progess bar
//   const [cvUrl, setCvUrl] = useState();
//   const el = useRef(); // accesing input element

//   const handleChange = (e) => {
//     setProgess(0);
//     const file = e.target.files[0]; // accessing file
//     console.log(file);
//     setFile(file); // storing file
//   };
//   useEffect(() => {
//     url(cvUrl);
//   });
//   const uploadFile = () => {
//     debugger;
//     const formData = new FormData();
//     formData.append("cv", file);

//     uploadPdf(formData);

//     axios
//       .post("https://peoplexdev.packagex.xyz/uploadcv", formData, {
//         onUploadProgress: (ProgressEvent) => {
//           let progress =
//             Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
//             "%";
//           setProgess(progress);
//         },
//       })
//       .then((res) => {
//         console.log("ajsdkjanskjdsa", res);
//         setCvUrl(res.data.url);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <div className="file-upload">
//         <input type="file" ref={el} onChange={handleChange} />
//         <div className="progessBar" style={{ width: progress }}>
//           {progress}
//         </div>
//         <button onClick={uploadFile} className="upbutton">
//           Upload
//         </button>
//         <hr />
//         {/* displaying received image*/}
//         {data.path && <img src={data.path} alt={data.name} />}
//       </div>
//     </div>
//   );
// }

// export default FileUpload;
