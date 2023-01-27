import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./css/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <Link>Home</Link>
          </div>
          <div className="sidebar-option">
            <Link>PUBLIC</Link>
            <div className="link">
              <div className="link-tag">
                <Avatar />
                <Link>Question</Link>
              </div>
              <div className="tags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>COLLECTIVES</p>
            <div className="link">
              <div className="link-tag">
                <Avatar />
                <Link>Explore Collectives</Link>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p> FIND A JOB</p>
            <div className="link">
              <div className="link-tag">
                <Link>Jobs</Link>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>TEAMS</p>
            <div className="link-tag">
              <Avatar />
              <Link>Companies</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
