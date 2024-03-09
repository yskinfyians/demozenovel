import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import "./ViewDesign.css"; // Import your custom CSS file
import { useNavigate } from "react-router-dom";

const ViewDesign = () => {
  const navigate = useNavigate();

  // Dummy data for the view section
  const projectData = {
    project_id: "001",
    sponsor_name: "Sponsor A",
    zenovel_id: "Z001",
    short_study_title: "Study 1",
    status: "Active",
    cro_id: "CRO001",
    cro_name: "CRO X",
    regulatory_submission: "2024-02-26",
    date_of_upcoming_mail: "2024-03-10",
    monitoring_plan_meeting_date: "2024-03-15",
    date_of_mpm_asm_shared_to_sponsor: "2024-03-20",
    study_result: "Pass", // Added to parent data
    scan_copy_of_source_documents: "Available", // Added to parent data
    date_of_submission_to_qms_archival: "2024-03-25", // Added to parent data
    final_archival_date: "2024-03-30", // Added to parent data
  };

  // Mapping between column names and corresponding keys in projectData object
  const columnKeyMapping = {
    "Project ID": "project_id",
    "Sponsor Name": "sponsor_name",
    "Zenovel ID": "zenovel_id",
    "Short Study Title": "short_study_title",
    Status: "status",
    "CRO ID/Fast/Fed/NA": "cro_id",
    "CRO Name": "cro_name",
    "Regulatory Submission": "regulatory_submission",
    "Date of Upcoming Mail": "date_of_upcoming_mail",
    "Monitoring Plan Meeting/Audit Statergy Meeting Date":
      "monitoring_plan_meeting_date",
    "Date of MPM/ASM shared to sponsor": "date_of_mpm_asm_shared_to_sponsor",
    "Study Result (Pass/Fail)": "study_result",
    "Scan Copy of all Source Documents (IPD) in central drive":
      "scan_copy_of_source_documents",
    "Date of submission to QMS Archival": "date_of_submission_to_qms_archival",
    "Final Archival date": "final_archival_date",
  };

  // Handler for back button click
  const handleBackClick = () => {
    console.log("Back button clicked"); // Placeholder action, you can replace this with your navigation logic
    navigate("/projectTracking");
  };

  // Dummy data for the child details table
  const childDetails = [
    {
      scope_of_visit: "Scope 1",
      agenda_shared: "Yes",
      name_of_monitor: "John Doe",
      visit_end_date: "2024-03-16",
      report_from_monitor: "Available",
      report_to_sponsor: "Pending",
      approval_from_sponsor: "Pending",
      signed_report_shared_to_sponsor: "Pending",
      mfr_to_cro: "Pending",
      report_capa_from_cro: "Pending",
    },
    {
      scope_of_visit: "Scope 1",
      agenda_shared: "Yes",
      name_of_monitor: "John Doe",
      visit_end_date: "2024-03-16",
      report_from_monitor: "Available",
      report_to_sponsor: "Pending",
      approval_from_sponsor: "Pending",
      signed_report_shared_to_sponsor: "Pending",
      mfr_to_cro: "Pending",
      report_capa_from_cro: "Pending",
    },
    {
      scope_of_visit: "Scope 1",
      agenda_shared: "Yes",
      name_of_monitor: "John Doe",
      visit_end_date: "2024-03-16",
      report_from_monitor: "Available",
      report_to_sponsor: "Pending",
      approval_from_sponsor: "Pending",
      signed_report_shared_to_sponsor: "Pending",
      mfr_to_cro: "Pending",
      report_capa_from_cro: "Pending",
    },
    {
      scope_of_visit: "Scope 1",
      agenda_shared: "Yes",
      name_of_monitor: "John Doe",
      visit_end_date: "2024-03-16",
      report_from_monitor: "Available",
      report_to_sponsor: "Pending",
      approval_from_sponsor: "Pending",
      signed_report_shared_to_sponsor: "Pending",
      mfr_to_cro: "Pending",
      report_capa_from_cro: "Pending",
    },
    {
      scope_of_visit: "Scope 1",
      agenda_shared: "Yes",
      name_of_monitor: "John Doe",
      visit_end_date: "2024-03-16",
      report_from_monitor: "Available",
      report_to_sponsor: "Pending",
      approval_from_sponsor: "Pending",
      signed_report_shared_to_sponsor: "Pending",
      mfr_to_cro: "Pending",
      report_capa_from_cro: "Pending",
    },
    {
      scope_of_visit: "Scope 1",
      agenda_shared: "Yes",
      name_of_monitor: "John Doe",
      visit_end_date: "2024-03-16",
      report_from_monitor: "Available",
      report_to_sponsor: "Pending",
      approval_from_sponsor: "Pending",
      signed_report_shared_to_sponsor: "Pending",
      mfr_to_cro: "Pending",
      report_capa_from_cro: "Pending",
    },
    {
      scope_of_visit: "Scope 1",
      agenda_shared: "Yes",
      name_of_monitor: "John Doe",
      visit_end_date: "2024-03-16",
      report_from_monitor: "Available",
      report_to_sponsor: "Pending",
      approval_from_sponsor: "Pending",
      signed_report_shared_to_sponsor: "Pending",
      mfr_to_cro: "Pending",
      report_capa_from_cro: "Pending",
    },
    {
      scope_of_visit: "Scope 1",
      agenda_shared: "Yes",
      name_of_monitor: "John Doe",
      visit_end_date: "2024-03-16",
      report_from_monitor: "Available",
      report_to_sponsor: "Pending",
      approval_from_sponsor: "Pending",
      signed_report_shared_to_sponsor: "Pending",
      mfr_to_cro: "Pending",
      report_capa_from_cro: "Pending",
    },
    {
      scope_of_visit: "Scope 1",
      agenda_shared: "Yes",
      name_of_monitor: "John Doe",
      visit_end_date: "2024-03-16",
      report_from_monitor: "Available",
      report_to_sponsor: "Pending",
      approval_from_sponsor: "Pending",
      signed_report_shared_to_sponsor: "Pending",
      mfr_to_cro: "Pending",
      report_capa_from_cro: "Pending",
    },
    // Add more rows as needed
  ];

  return (
    <div className="view-container">
      {/* Header */}
      <hr></hr>
      <Typography variant="h4" gutterBottom align="center">
        View your progress
      </Typography>
      <hr></hr>
      <br></br>

      {/* Dynamic population of select inputs */}
      <Grid container spacing={3}>
        {Object.keys(columnKeyMapping).map((column, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth disabled>
              <InputLabel>{column}</InputLabel>
              <Select
                value={projectData[columnKeyMapping[column]]}
                label={column}
              >
                <MenuItem value={projectData[columnKeyMapping[column]]}>
                  {projectData[columnKeyMapping[column]]}
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>

      {/* Table View for Child Details */}
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Scope of Visit</TableCell>
              <TableCell>Agenda Shared</TableCell>
              <TableCell>Name of Monitor</TableCell>
              <TableCell>Visit End Date</TableCell>
              <TableCell>Report from Monitor</TableCell>
              <TableCell>Report to Sponsor</TableCell>
              <TableCell>Approval from Sponsor</TableCell>
              <TableCell>Signed Report shared to Sponsor</TableCell>
              <TableCell>MFR to CRO</TableCell>
              <TableCell>Report CAPA from CRO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {childDetails.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.scope_of_visit}</TableCell>
                <TableCell>{row.agenda_shared}</TableCell>
                <TableCell>{row.name_of_monitor}</TableCell>
                <TableCell>{row.visit_end_date}</TableCell>
                <TableCell>{row.report_from_monitor}</TableCell>
                <TableCell>{row.report_to_sponsor}</TableCell>
                <TableCell>{row.approval_from_sponsor}</TableCell>
                <TableCell>{row.signed_report_shared_to_sponsor}</TableCell>
                <TableCell>{row.mfr_to_cro}</TableCell>
                <TableCell>{row.report_capa_from_cro}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Back button */}
      <div className="back-button-container">
        <Button variant="contained" onClick={handleBackClick}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default ViewDesign;
