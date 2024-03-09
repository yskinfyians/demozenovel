import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import styles from "./Home.module.css";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${theme.breakpoints.up("sm")} `]: {
    fontSize: "1.2rem",
  },
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.secondary.main,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Home() {
  const recentProjectsData = [
    { projectName: "Project A", projectOwner: "John Doe", date: "2024-03-08" },
    {
      projectName: "Project B",
      projectOwner: "Jane Smith",
      date: "2024-03-07",
    },
    {
      projectName: "Project C",
      projectOwner: "Alice Johnson",
      date: "2024-03-06",
    },
    // Add more dummy data as needed
  ];

  const approachingDeadlines = [
    {
      projectName: "Project X",
      activity: "Task A",
      approachingDate: "2024-03-15",
    },
    {
      projectName: "Project Y",
      activity: "Task B",
      approachingDate: "2024-03-16",
    },
    {
      projectName: "Project Z",
      activity: "Task C",
      approachingDate: "2024-03-17",
    },
    // Add more dummy data as needed
  ];
  const upcomingAudits = [
    { name: "Audit 1", date: "2024-03-15" },
    { name: "Audit 2", date: "2024-03-16" },
    { name: "Audit 3", date: "2024-03-17" },
    // Add more dummy data as needed
  ];

  return (
    <div>
      <div>
        <div className={styles.graphSummary}>
          <div>
            <div className={styles.graph}>
              <h5 style={{ padding: "10px" }}>Total Projects Month wise</h5>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
                series={[
                  {
                    data: [2, 3, 4, 5, 6, 7, 8, 9, 8, 1, 3, 5],
                  },
                ]}
                width={1000}
                height={300}
              />
            </div>
            <div
              style={{
                marginTop: "20px",
                border: "2px solid grey",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <h4>Recent Projects</h4>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Project Name</StyledTableCell>
                      <StyledTableCell align="right">
                        Project Owner
                      </StyledTableCell>
                      <StyledTableCell align="right">Date</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentProjectsData.map((project, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                          {project.projectName}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {project.projectOwner}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {project.date}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div
              style={{
                marginTop: "20px",
                border: "2px solid grey",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <h4>Approachig Deadlines</h4>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Project Name</StyledTableCell>
                      <StyledTableCell>Activity</StyledTableCell>
                      <StyledTableCell>Approaching Date</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {approachingDeadlines.map((deadline, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                          {deadline.projectName}
                        </StyledTableCell>
                        <StyledTableCell>{deadline.activity}</StyledTableCell>
                        <StyledTableCell>
                          {deadline.approachingDate}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          <div>
            <div className={styles.empAward}>
              <h5 style={{ padding: "10px" }}>Employee Of the Month : </h5>
              <div style={{ textAlign: "center", marginTop: "30px" }}>
                <MilitaryTechIcon sx={{ fontSize: 100 }} />
                <h5 style={{ padding: "10px", marginTop: "10px" }}>
                  This is to applaud the dedication and hardwork of USER for
                  developing the REASON.
                </h5>
              </div>
            </div>
            <div className={styles.empAward}>
              <h5 style={{ padding: "10px" }}>Upcoming Audits : </h5>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Audit Name</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {upcomingAudits.map((audit, index) => (
                      <TableRow key={index}>
                        <TableCell>{audit.name}</TableCell>
                        <TableCell>{audit.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
