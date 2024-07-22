import React from "react";
import { NavLink } from "react-router-dom";

const Usermenuadmin = () => {
  return (
    <div className="text-center">
      <div className="list-group">
        <h4>
          <strong>Admin Panel</strong>
        </h4>
        <NavLink
          to="/dashboard/admin/adminProfile"
          className="list-group-item list-group-item-action"
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/admin/admindonations"
          className="list-group-item list-group-item-action"
        >
          Donations
        </NavLink>
      </div>
    </div>
  );
};

export default Usermenuadmin;
