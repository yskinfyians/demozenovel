import React, { useState } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

export default function NewProject() {
  const [formValue, setFormValue] = useState({
    projectId: "",
    sponsorName: "",
    zenovelId: "",
    shortStudyTitle: "",
    status: "",
    croId: "",
    croName: "",
    regulatorySubmission: "",
    dateOfUpcomingMail: "",
    supportingAttachments: [],
    registeredBy: "",
  });

  const [attachmentsList, setAttachmentsList] = useState([]);
  const onChange = (e) => {
    if (e.target.type === "file") {
      // Convert FileList to array
      const filesArray = Array.from(e.target.files);
      // Update attachments list for display
      const newAttachmentsList = filesArray.map((file) => file.name);
      setAttachmentsList([...attachmentsList, ...newAttachmentsList]);
      // Update form value with concatenated array of files
      setFormValue({
        ...formValue,
        supportingAttachments: [
          ...formValue.supportingAttachments,
          ...filesArray,
        ],
      });
    } else {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formValue);
    // Send form data to backend API here
  };

  const handleRemoveAttachment = (indexToRemove) => {
    const updatedAttachmentsList = attachmentsList.filter(
      (_, index) => index !== indexToRemove
    );
    setAttachmentsList(updatedAttachmentsList);
    // Remove corresponding file from supportingAttachments array
    const updatedSupportingAttachments = formValue.supportingAttachments.filter(
      (_, index) => index !== indexToRemove
    );
    setFormValue({
      ...formValue,
      supportingAttachments: updatedSupportingAttachments,
    });
  };

  return (
    <div
      style={{
        padding: "30px",
        border: "2px solid green",
        marginTop: "10px",
        marginRight: "20px",
        borderRadius: "10px",
        backgroundColor: "lightgray",
      }}
    >
      <h5>Register a new project</h5>
      <hr />
      <MDBRow tag="form" className="g-3" onSubmit={handleSubmit}>
        <MDBCol md="6">
          <MDBInput
            value={formValue.projectId}
            name="projectId"
            onChange={onChange}
            id="projectId"
            required
            label="Project ID"
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            value={formValue.sponsorName}
            name="sponsorName"
            onChange={onChange}
            id="sponsorName"
            required
            label="Sponsor Name"
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            value={formValue.zenovelId}
            name="zenovelId"
            onChange={onChange}
            id="zenovelId"
            required
            label="Zenovel ID"
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            value={formValue.shortStudyTitle}
            name="shortStudyTitle"
            onChange={onChange}
            id="shortStudyTitle"
            required
            label="Short Study Title"
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            value={formValue.status}
            name="status"
            onChange={onChange}
            id="status"
            required
            label="Status"
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            value={formValue.croId}
            name="croId"
            onChange={onChange}
            id="croId"
            required
            label="CRO ID/Fast/Fed/NA"
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            value={formValue.croName}
            name="croName"
            onChange={onChange}
            id="croName"
            required
            label="CRO Name"
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            value={formValue.regulatorySubmission}
            name="regulatorySubmission"
            onChange={onChange}
            id="regulatorySubmission"
            required
            label="Regulatory Submission"
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            value={formValue.dateOfUpcomingMail}
            name="dateOfUpcomingMail"
            onChange={onChange}
            id="dateOfUpcomingMail"
            required
            label="Date of Upcoming Mail"
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            value={formValue.registeredBy}
            name="registeredBy"
            onChange={onChange}
            id="registeredBy"
            required
            label="Registered By"
          />
        </MDBCol>
        <MDBCol md="6">
          <label htmlFor="supportingAttachments" className="form-label">
            Supporting Attachments
          </label>
          <input
            className="form-control"
            type="file"
            id="supportingAttachments"
            name="supportingAttachments"
            onChange={onChange}
            multiple // Allow multiple file selection
          />
          {attachmentsList.length > 0 && (
            <MDBListGroup className="mt-3">
              {attachmentsList.map((fileName, index) => (
                <MDBListGroupItem key={index}>
                  {fileName}
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    type="button"
                    onClick={() => handleRemoveAttachment(index)}
                  >
                    Remove
                  </button>
                </MDBListGroupItem>
              ))}
            </MDBListGroup>
          )}
        </MDBCol>
        <MDBCol md="12">
          <MDBCheckbox
            label="Agree to terms and conditions"
            id="invalidCheck2"
            required
          />
        </MDBCol>
        <MDBCol md="12">
          <MDBBtn type="submit">Submit form</MDBBtn>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
