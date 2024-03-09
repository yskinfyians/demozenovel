import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logged, loginactions, loginSelector } from "../redux/LoginReducer";
import { useSelector } from "react-redux";

function LoginPage() {
  // Define initial state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const selector = useSelector();
  const selector = useSelector(loginSelector);

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check for empty fields
    if (!formData.email.trim() || !formData.password.trim()) {
      toast.error("Email and password are required.");
      return;
    }
    console.log(formData);
    // Dummy backend endpoint
    const url = "https://dummybackend.com/login"; // Replace with actual backend endpoint

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        toast.success("Login successful!");
      } else {
        // Handle login error
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormData({ email: "", password: "" });
      toast.error("Login failed. Please check your credentials.");
      dispatch(logged({ token: "test", loggedIn: true }));
      navigate("home");
    }
  };

  console.log(selector);

  return (
    <MDBContainer className="my-4">
      <MDBCard style={{ marginTop: "50px" }}>
        <ToastContainer />
        <MDBRow className="g-0">
          <MDBCol md="5">
            <MDBCardImage
              src="https://seomarketingindia.in/Zenovel/wp-content/uploads/revslider/home-banner-1-1-1/girl.png"
              alt="login form"
              className="rounded-start w-100"
              style={{ height: "80vh" }}
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column align-items-center justify-content-center ms-md-5">
              <div className="d-flex flex-row mt-2">
                <MDBCardImage
                  src="https://zenovel.com/wp-content/uploads/2023/06/Zenovel-Web-01.png"
                  alt="login form"
                  className="rounded-start w-100"
                />
              </div>
              <h5
                className="fw-normal my-6 pb-3 text-center"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="email"
                name="email"
                type="email"
                size="lg"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="password"
                name="password"
                type="password"
                size="lg"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <MDBBtn
                type="submit"
                className="mb-4 px-5"
                color="dark"
                size="lg"
                onClick={handleSubmit}
              >
                Login
              </MDBBtn>
              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default LoginPage;
