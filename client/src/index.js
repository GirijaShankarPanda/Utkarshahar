import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./components/User/Dashboard";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/auth";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminDonations from "./components/Admin/AdminDonations";
import AdminProfile from "./components/Admin/AdminProfile";
import Donations from "./components/User/Donations";
import Profile from "./components/User/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard/user" element={<Dashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/user/donations" element={<Donations />} />
        <Route path="/dashboard/user/Profile" element={<Profile />} />
        <Route
          path="/dashboard/admin/adminProfile"
          element={<AdminProfile />}
        />
        <Route
          path="/dashboard/admin/admindonations"
          element={<AdminDonations />}
        />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

reportWebVitals();
