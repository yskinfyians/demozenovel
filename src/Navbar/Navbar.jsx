import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import the CSS module
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventIcon from "@mui/icons-material/Event";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import MapIcon from "@mui/icons-material/Map";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SummarizeIcon from "@mui/icons-material/Summarize";

const logoURL =
  "https://tse4.mm.bing.net/th?id=OIP.Bo8uF_x2C3CtzfsKwlHvMAAAAA&pid=Api&P=0&h=180"; // Define your logo URL here

export default function Navbar() {
  const [open, setOpen] = useState(false); // State to track whether the sidebar is open
  const navigate = useNavigate();

  const handleItemClick = (action) => {
    console.log(`Performing action: ${action}`);
    if (action === "projectMgt") {
      console.log("Inside add");
      navigate("/projectTracking");
    } else if (action === "reschedule") {
      console.log("Inside reschedule");
      navigate("/");
    } else if (action === "dashboard") {
      console.log("Inside dashboard");
    } else if (action === "profile") {
      console.log("Inside Profile");
    } else if (action === "Map") {
      console.log("Inside Map");
      navigate("/MapConfiguration");
    }
  };

  return (
    <div
      className={styles.container}
      //   onMouseLeave={handleContainerMouseLeave} // Handle mouse leave event on the container
    >
      <ul className={`${styles.sidebar} ${open ? styles.open : ""}`}>
        {/* Add class 'open' if sidebar is open */}
        {/* <li>
          <div className={styles.logo}>
            
            <span className={styles.text}>TCS HOBS</span>
          </div>
        </li> */}

        <li onClick={() => handleItemClick("reschedule")}>
          <span
            className={styles.icon}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <img
              src={logoURL}
              alt="Company Logo"
              style={{ width: "35px", height: "24px" }}
            />
            <span className={styles.tooltip}>ZENOVEL</span>
          </span>
        </li>

        {/* Divider after logo and name */}
        <li>
          <span
            className={styles.icon}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <AccountCircleIcon />
            <span className={styles.tooltip}>Welcome User</span>
          </span>
        </li>
        <li onClick={() => handleItemClick("projectMgt")}>
          <span
            className={styles.icon}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <AccountTreeIcon />
            <span className={styles.tooltip}>Track Projects</span>
          </span>
        </li>
        <li onClick={() => handleItemClick("projectMgt")}>
          <span
            className={styles.icon}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <SummarizeIcon />
            <span className={styles.tooltip}>Reports</span>
          </span>
        </li>
        {/* <li onClick={() => handleItemClick("reschedule")}>
          <span
            className={styles.icon}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <EventIcon />
            <span className={styles.tooltip}>Reschedule Appointment</span>
          </span>
        </li>
        <li onClick={() => handleItemClick("add")}>
          <span
            className={styles.icon}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <AddIcon />
            <span className={styles.tooltip}>Add Appointment</span>
          </span>
        </li>
        <li onClick={() => handleItemClick("cancel")}>
          <span
            className={styles.icon}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <CancelIcon />
            <span className={styles.tooltip}>Cancel Appointment</span>
          </span>
        </li>
        <li onClick={() => handleItemClick("Map")}>
          <span
            className={styles.icon}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <MapIcon />
            <span className={styles.tooltip}>Configure Map</span>
          </span>
        </li> */}
      </ul>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
