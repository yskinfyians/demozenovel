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
    username: "",
    encodedPassword: "",
  });
  <LoginPage />;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const selector = useSelector();
  const selector = useSelector(loginSelector);

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.username.trim() || !formData.encodedPassword.trim()) {
      toast.error("Email and password are required.");
      return;
    }

    const url = "https://spring-render-4dt2.onrender.com/login/newLogin";

    try {
      const base64Password = btoa(formData.encodedPassword); // Encoding password to base64
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          encodedPassword: base64Password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.statusCode !== "200") {
          toast.error("Login failed. Please check your credentials.");
          return;
        }

        toast.success("Login successful!");
        setFormData({ username: "", encodedPassword: "" });
        dispatch(logged({ token: "test", loggedIn: true }));
        navigate("/home");
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
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
                id="username"
                name="username"
                type="username"
                size="lg"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="encodedPassword"
                name="encodedPassword"
                type="password"
                size="lg"
                value={formData.encodedPassword}
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
