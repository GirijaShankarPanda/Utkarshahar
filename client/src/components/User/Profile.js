import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Usermenu from "../Usermenu";
import Footer from "../Footer";
import { useAuth } from "../../context/auth";
import "./Profile.css";
import Spinner from "../Spinner";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [auth, setAuth] = useAuth(); // Get auth context

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/auth/users", {
        name,
        email,
        password,
        phone,
        address,
      });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (auth?.user) {
      const { email, name, phone, address } = auth.user;
      setName(name || "");
      setEmail(email || "");
      setPhone(phone || "");
      setAddress(address || "");
    }
  }, [auth?.user]);

  if (!auth?.user) {
    return <Spinner />;
  }

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

      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Usermenu />
          </div>

          <div className="col-md-9">
            <div className="card profile-card w-75 p-3 shadow-sm rounded">
              <h2 className="profile-heading">Profile</h2>
              <div className="profile-details">
                <p>
                  <strong>Name:</strong> {name}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Phone:</strong> {phone}
                </p>
                <p>
                  <strong>Address:</strong> {address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec3">
        <div className="w3-container w3-light-grey">
          <div className="w3-row-padding">
            <div className="w3-col m6">
              <h3>"We feel the hunger"</h3>
              <p>
                Our website connects people with surplus food to NGOs dedicated
                to feeding the hungry. Through efficient coordination and our
                wide-reaching network, we facilitate the donation and
                distribution of safe, high-quality food to those in need. Our
                efforts ensure that excess food is not wasted but instead
                reaches those who need it most, combating hunger and fostering a
                community of compassion and sustainability.
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
  );
};

export default Profile;
