import React from "react";
import { useAuth } from "../../context/auth";
import Spinner from "../Spinner"; // Import your spinner component
import Usermenu from "../Usermenu";
import Footer from "../Footer";
import "./Dashboard.css";
const Dashboard = () => {
  const [auth] = useAuth();

  // If not authenticated, display spinner
  if (!auth.token || (auth.token && auth.user && auth.user.role === 1)) {
    return <Spinner />;
  }

  // Render dashboard content for authenticated users
  return (
    <div className="dashboard-container">
      <div className="w3-top">
        <div className="w3-bar w3-white w3-card" id="myNavbar">
          <a href="#home" className="w3-bar-item w3-button w3-wide">
            <b>UTKARSHAHAR</b>
          </a>

          <div className="w3-right w3-hide-small">
            <a href="/" className="w3-bar-item w3-button">
              Go Back
            </a>
          </div>
        </div>
      </div>

      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Usermenu />
          </div>

          {/* <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div> */}
          <div className="w3-col m9">
            <img
              id="img122"
              className="w3-image w3-round-large"
              src={`${process.env.PUBLIC_URL}/img122.jpg`}
              alt="Buildings"
              width="auto"
              height="394"
            />
          </div>
        </div>
        <div>
          <div className="sec3">
            <div className="w3-container w3-light-grey">
              <div className="w3-row-padding">
                <div className="w3-col m6">
                  <h3>"We feel the hunger"</h3>
                  <p>
                    Our website connects people with surplus food to NGOs
                    dedicated to feeding the hungry. Through efficient
                    coordination and our wide-reaching network, we facilitate
                    the donation and distribution of safe, high-quality food to
                    those in need. Our efforts ensure that excess food is not
                    wasted but instead reaches those who need it most, combating
                    hunger and fostering a community of compassion and
                    sustainability.
                  </p>
                </div>
                <div className="w3-col m6">
                  <img
                    id="img30"
                    className="w3-image w3-round-large"
                    src={`${process.env.PUBLIC_URL}/img30.jpg`}
                    alt="Buildings"
                    width="700"
                    height="394"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
