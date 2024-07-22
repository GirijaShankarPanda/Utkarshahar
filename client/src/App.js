import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Header from "./components/Header";
import Problem from "./components/Problem";
import About from "./components/About";
import Section from "./components/Section";
import Team from "./components/Team";
import Statistics from "./components/Statistics";
import Work from "./components/Work";
import Culture from "./components/Culture";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import DonationForm from "./components/DonationForm";
import { useAuth } from "./context/auth";
import { toast } from "react-hot-toast";
import Dashboard from "./components/User/Dashboard";
import "./App.css";
import "./Donate.css";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/Routes/Private";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminProfile from "./components/Admin/AdminProfile";
import AdminDonations from "./components/Admin/AdminDonations";
import Donations from "./components/User/Donations";
import Profile from "./components/User/Profile";

function App() {
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [auth] = useAuth(); // Use the auth context

  const toggleDonationForm = () => {
    if (auth.token) {
      setShowDonationForm((prevState) => !prevState);
    } else {
      toast.error("Please log in to donate.");
      // alert("Please log in to donate.");
    }
  };

  return (
    <>
      <Navbar />
      <Toaster />
      <Header
        onDonateButtonClick={toggleDonationForm}
        isLoggedIn={!!auth.token}
        isAdmin={auth.user?.role === 1}
      />
      {showDonationForm && (
        <DonationForm
          isActive={showDonationForm}
          closeForm={toggleDonationForm}
        />
      )}
      <Routes>
        <Route path="/dashboard/user" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="donations" element={<Donations />} />
        </Route>
        <Route path="/dashboard/admin" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="adminProfile" element={<AdminProfile />} />
          <Route path="admindonations" element={<AdminDonations />} />
        </Route>
      </Routes>
      <Problem />
      <Register />
      <About />
      <Section />
      <Statistics />
      <Team />
      <Work />
      <Culture />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
