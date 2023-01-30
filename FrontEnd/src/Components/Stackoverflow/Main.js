import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import AllQuestions from "./AllQuestions";
import "./css/Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2> All Question</h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>
        </div>
        <div className="main-desc">
          <p>All Question length</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                <Link>Newest</Link>
              </div>
              <div className="main-tab">
                <Link>Active</Link>
              </div>
              <div className="main-tab">
                <Link>More</Link>
              </div>
            </div>
            <div className="main-filter-item">
              <Avatar />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="question">
          <div className="question">
            <AllQuestions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
