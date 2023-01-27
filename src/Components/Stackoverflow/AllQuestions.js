import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./css/AllQuestions.css";

const AllQuestions = () => {
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-question-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>Votes</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <span>Answer</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <small>0 Views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link>THis is title</Link>
          <div style={{ width: "90%" }}>
            <div>
              THis is answer kdhgkfdjhdkf dkfdkfj dkfhdlkfjdlfkj dlfkjdl fdlfk
              jdlfkj dlfjdlkf dflkjd fldkfj dlkfjdl
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <span className="question-tags">React</span>
            <span className="question-tags">server</span>
            <span className="question-tags">frontend</span>
          </div>
          <div className="author">
            <small>TimeStamp</small>
            <div className="author-details">
              <Avatar />
              <p>Username</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQuestions;
