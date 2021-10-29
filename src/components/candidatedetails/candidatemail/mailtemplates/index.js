import React from "react";
import { MailTemplatesSelect } from "./mailtemplates.style";

const MailTemplates = ({ mailTemplate }) => {
  const { Option } = MailTemplatesSelect;

  const scheduleMail =
    "This is to inform you that your interview has been scheduled!";

  const hiringCandidate =
    "This email is to inform you that you have been hired";

  function handleChange(value) {
    console.log(`selected ${value}`);
    mailTemplate(value);
  }

  return (
    <MailTemplatesSelect placeholder="Templates" onChange={handleChange}>
      <Option value={scheduleMail}>Schedule Interiew</Option>
      <Option value={hiringCandidate}>Hire Candidate</Option>
    </MailTemplatesSelect>
  );
};

export default MailTemplates;
