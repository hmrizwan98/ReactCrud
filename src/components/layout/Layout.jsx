import React from "react";
import "./layout.scss";
import Sidebar from "../sidebar/Sidebar";
import Dashboard from "../Dashboard";

const Layout = () => {
  return (
    <>
      <div className="header">
        <Sidebar />
      </div>
      <div className="sidebar-and-content">
        <div className="sidebar">sidebar</div>
        <div className="content">
          <div>
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
