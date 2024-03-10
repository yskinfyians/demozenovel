import React, { useState } from "react";
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
  Input,
} from "@mui/material";
import "./ViewDesign.css"; // Import your custom CSS file
import { useNavigate } from "react-router-dom";
import "./ViewDesign.css";

const EditDesign = () => {
  const navigate = useNavigate();

  const [projectData, setProjectData] = useState({
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
    study_result: "Pass",
    scan_copy_of_source_documents: "Available",
    date_of_submission_to_qms_archival: "2024-03-25",
    final_archival_date: "2024-03-30",
    report_from_monitor: "Report from Monitor Data",
    report_to_sponsor: "Report to Sponsor Data",
    approval_from_sponsor: "Approval from Sponsor Data",
    signed_report_shared_to_sponsor: "Signed Report shared to Sponsor Data",
    mfr_to_cro: "MFR to CRO Data",
    report_capa_from_cro: "Report CAPA from CRO Data",
  });

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
    "Monitoring Plan Meeting/Audit Strategy Meeting Date":
      "monitoring_plan_meeting_date",
    "Date of MPM/ASM shared to sponsor": "date_of_mpm_asm_shared_to_sponsor",
    "Study Result (Pass/Fail)": "study_result",
    "Scan Copy of all Source Documents (IPD) in central drive":
      "scan_copy_of_source_documents",
    "Date of submission to QMS Archival": "date_of_submission_to_qms_archival",
    "Final Archival date": "final_archival_date",
    "Report from Monitor": "report_from_monitor",
    "Report to Sponsor": "report_to_sponsor",
    "Approval from Sponsor": "approval_from_sponsor",
    "Signed Report shared to Sponsor": "signed_report_shared_to_sponsor",
    "MFR to CRO": "mfr_to_cro",
    "Report CAPA from CRO": "report_capa_from_cro",
  };

  // Handler for back button click
  const handleBackClick = () => {
    console.log("Back button clicked"); // Placeholder action, you can replace this with your navigation logic
    navigate("/projectTracking");
  };

  // Handler for input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  // Dummy data for the child details table
  const [childDetails, setChildDetails] = useState([
    {
      id: 1,
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
      isEditing: false,
    },
    // Add more rows as needed
  ]);

  // Handler for table cell edit
  const handleTableCellEdit = (rowId, column, newValue) => {
    const updatedChildDetails = childDetails.map((row) => {
      if (row.id === rowId) {
        return { ...row, [column]: newValue };
      }
      return row;
    });
    setChildDetails(updatedChildDetails);
  };

  // Handler for toggle edit mode
  const toggleEditMode = (rowId) => {
    const updatedChildDetails = childDetails.map((row) => {
      if (row.id === rowId) {
        return { ...row, isEditing: !row.isEditing };
      }
      return row;
    });
    setChildDetails(updatedChildDetails);
  };

  // Handler for adding a new row
  const handleAddRow = () => {
    const newRowId = Math.max(...childDetails.map((row) => row.id)) + 1;
    setChildDetails([
      ...childDetails,
      {
        id: newRowId,
        scope_of_visit: "",
        agenda_shared: "",
        name_of_monitor: "",
        visit_end_date: "",
        report_from_monitor: "",
        report_to_sponsor: "",
        approval_from_sponsor: "",
        signed_report_shared_to_sponsor: "",
        mfr_to_cro: "",
        report_capa_from_cro: "",
        isEditing: true,
      },
    ]);
  };

  return (
    <div className="edit-container">
      {/* Header */}
      <hr />
      <Typography variant="h4" gutterBottom align="center">
        Edit your progress
      </Typography>
      <hr />
      <br />

      {/* Dynamic population of select inputs */}
      <Grid container spacing={3}>
        {Object.keys(columnKeyMapping).map((column, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor={columnKeyMapping[column]}>
                {column}
              </InputLabel>
              <Input
                id={columnKeyMapping[column]}
                value={projectData[columnKeyMapping[column]]}
                onChange={handleInputChange}
                name={columnKeyMapping[column]}
                variant="outlined"
                disabled={
                  columnKeyMapping[column] === "project_id" ||
                  columnKeyMapping[column] === "sponsor_name" // Disable the input if the column is 'project_id' or 'sponsor_name'
                }
              />
            </FormControl>
          </Grid>
        ))}
      </Grid>

      {/* Table View for Child Details */}
      <div className="table-scroll-container">
        <TableContainer component={Paper} className="table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
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
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {childDetails.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    {row.isEditing ? (
                      <input
                        type="text"
                        value={row.scope_of_visit}
                        onChange={(e) =>
                          handleTableCellEdit(
                            row.id,
                            "scope_of_visit",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      row.scope_of_visit
                    )}
                  </TableCell>
                  <TableCell>
                    {row.isEditing ? (
                      <input
                        type="text"
                        value={row.agenda_shared}
                        onChange={(e) =>
                          handleTableCellEdit(
                            row.id,
                            "agenda_shared",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      row.agenda_shared
                    )}
                  </TableCell>
                  <TableCell>
                    {row.isEditing ? (
                      <input
                        type="text"
                        value={row.name_of_monitor}
                        onChange={(e) =>
                          handleTableCellEdit(
                            row.id,
                            "name_of_monitor",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      row.name_of_monitor
                    )}
                  </TableCell>
                  <TableCell>
                    {row.isEditing ? (
                      <input
                        type="text"
                        value={row.visit_end_date}
                        onChange={(e) =>
                          handleTableCellEdit(
                            row.id,
                            "visit_end_date",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      row.visit_end_date
                    )}
                  </TableCell>
                  <TableCell>
                    {row.isEditing ? (
                      <input
                        type="text"
                        value={row.report_from_monitor}
                        onChange={(e) =>
                          handleTableCellEdit(
                            row.id,
                            "report_from_monitor",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      row.report_from_monitor
                    )}
                  </TableCell>
                  <TableCell>
                    {row.isEditing ? (
                      <input
                        type="text"
                        value={row.report_to_sponsor}
                        onChange={(e) =>
                          handleTableCellEdit(
                            row.id,
                            "report_to_sponsor",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      row.report_to_sponsor
                    )}
                  </TableCell>
                  <TableCell>
                    {row.isEditing ? (
                      <input
                        type="text"
                        value={row.approval_from_sponsor}
                        onChange={(e) =>
                          handleTableCellEdit(
                            row.id,
                            "approval_from_sponsor",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      row.approval_from_sponsor
                    )}
                  </TableCell>
                  <TableCell>
                    {row.isEditing ? (
                      <input
                        type="text"
                        value={row.signed_report_shared_to_sponsor}
                        onChange={(e) =>
                          handleTableCellEdit(
                            row.id,
                            "signed_report_shared_to_sponsor",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      row.signed_report_shared_to_sponsor
                    )}
                  </TableCell>
                  <TableCell>
                    {row.isEditing ? (
                      <input
                        type="text"
                        value={row.mfr_to_cro}
                        onChange={(e) =>
                          handleTableCellEdit(
                            row.id,
                            "mfr_to_cro",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      row.mfr_to_cro
                    )}
                  </TableCell>
                  <TableCell>
                    {row.isEditing ? (
                      <input
                        type="text"
                        value={row.report_capa_from_cro}
                        onChange={(e) =>
                          handleTableCellEdit(
                            row.id,
                            "report_capa_from_cro",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      row.report_capa_from_cro
                    )}
                  </TableCell>
                  <TableCell>
                    {row.isEditing ? (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => toggleEditMode(row.id)}
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => toggleEditMode(row.id)}
                      >
                        Edit
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Add row button */}
      <div className="add-row-button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddRow}
          style={{ marginTop: "10px" }}
        >
          Add Row
        </Button>
      </div>

      {/* Back button */}
      <div className="back-button-container">
        <Button variant="contained" onClick={handleBackClick}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default EditDesign;
