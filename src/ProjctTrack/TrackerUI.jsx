import React, { useState } from "react";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Grid,
  Typography,
  Box, // Import Box component
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import "./TrackerUI.css";
import { useNavigate } from "react-router-dom";

const TrackerUI = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchColumn, setSearchColumn] = useState("");
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  // Sample data
  const data = [
    {
      project_id: "001",
      sponsor_name: "Sponsor A",
      zenovel_id: "Z001",
      short_study_title: "Study 1",
      status: "Active",
      cro_id: "CRO001",
      cro_name: "CRO X",
      regulatory_submission: "2024-02-26",
      date_of_upcoming_mail: "2024-03-10",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    {
      project_id: "002",
      sponsor_name: "Sponsor B",
      zenovel_id: "Z002",
      short_study_title: "Study 2",
      status: "Inactive",
      cro_id: "CRO002",
      cro_name: "CRO Y",
      regulatory_submission: "2024-02-27",
      date_of_upcoming_mail: "2024-03-12",
    },
    // Add more sample data as needed
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(0); // Reset page to 0 when search term changes
  };

  const handleColumnSearch = (e) => {
    setSearchColumn(e.target.value);
    setPage(0); // Reset page to 0 when search column changes
  };

  const filteredData = data.filter((row) => {
    if (searchColumn === "") {
      return Object.values(row).some((val) =>
        val.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return row[searchColumn].toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  const handleViewClick = (rowData) => {
    console.log("View clicked:", rowData);
    navigate("/viewTracker");
  };

  const handleEditClick = (rowData) => {
    console.log("Edit clicked:", rowData);
  };

  const handleRegisterProject = () => {
    console.log("Register New Project button clicked");
    // Add your navigation logic here to navigate to the registration page
  };

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const startIndex = page * itemsPerPage;
  const endIndex = Math.min((page + 1) * itemsPerPage, filteredData.length);

  return (
    <div className="tracker-container">
      {/* Heading */}
      <hr />
      <Typography variant="h4" align="center" gutterBottom>
        Your tracking summary
      </Typography>
      <hr />
      <br />
      {/* Search Inputs */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            fullWidth
            onChange={handleSearch}
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
            className="search-input"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel>Select Column</InputLabel>
            <Select
              value={searchColumn}
              onChange={handleColumnSearch}
              label="Select Column"
              className="select-column"
            >
              <MenuItem value="">All Columns</MenuItem>
              <MenuItem value="project_id">Project ID</MenuItem>
              <MenuItem value="sponsor_name">Sponsor Name</MenuItem>
              <MenuItem value="zenovel_id">Zenovel ID</MenuItem>
              <MenuItem value="short_study_title">Short Study Title</MenuItem>
              <MenuItem value="status">Status</MenuItem>
              <MenuItem value="cro_id">CRO ID/Fast/Fed/NA</MenuItem>
              <MenuItem value="cro_name">CRO Name</MenuItem>
              <MenuItem value="regulatory_submission">
                Regulatory Submission
              </MenuItem>
              <MenuItem value="date_of_upcoming_mail">
                Date of Upcoming Mail
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Table */}
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="table-header-cell">Project ID</TableCell>
              <TableCell className="table-header-cell">Sponsor Name</TableCell>
              <TableCell className="table-header-cell">Zenovel ID</TableCell>
              <TableCell className="table-header-cell">
                Short Study Title
              </TableCell>
              <TableCell className="table-header-cell">Status</TableCell>
              <TableCell className="table-header-cell">
                CRO ID/Fast/Fed/NA
              </TableCell>
              <TableCell className="table-header-cell">CRO Name</TableCell>
              <TableCell className="table-header-cell">
                Regulatory Submission
              </TableCell>
              <TableCell className="table-header-cell">
                Date of Upcoming Mail
              </TableCell>
              <TableCell className="table-header-cell">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(startIndex, endIndex).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.project_id}</TableCell>
                <TableCell>{row.sponsor_name}</TableCell>
                <TableCell>{row.zenovel_id}</TableCell>
                <TableCell>{row.short_study_title}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.cro_id}</TableCell>
                <TableCell>{row.cro_name}</TableCell>
                <TableCell>{row.regulatory_submission}</TableCell>
                <TableCell>{row.date_of_upcoming_mail}</TableCell>
                <TableCell className="action-cell">
                  <IconButton
                    aria-label="view"
                    onClick={() => handleViewClick(row)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    aria-label="edit"
                    onClick={() => handleEditClick(row)}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Buttons */}
      <div className="pagination-buttons">
        <IconButton onClick={handlePrevPage} disabled={page === 0}>
          Prev
        </IconButton>
        <IconButton onClick={handleNextPage} disabled={page === totalPages - 1}>
          Next
        </IconButton>
      </div>

      {/* Register New Project Button */}
      <Box position="fixed" bottom={20} right={20} zIndex={1000}>
        <IconButton
          onClick={handleRegisterProject}
          color="primary"
          size="small"
          //   sx={{ width: 100, height: 100 }}
        >
          <AddIcon fontSize="large" />
        </IconButton>
      </Box>
    </div>
  );
};

export default TrackerUI;
