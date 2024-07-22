import React from "react";
import { NavLink } from "react-router-dom";

const Usermenu = () => {
  return (
    <div className="text-center">
      <div className="list-group">
        <h4>
          <strong>User Panel</strong>
        </h4>
        <NavLink
          to="/dashboard/user/Profile"
          className="list-group-item list-group-item-action"
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/donations"
          className="list-group-item list-group-item-action"
        >
          Donations
        </NavLink>
      </div>
    </div>
  );
};

export default Usermenu;
