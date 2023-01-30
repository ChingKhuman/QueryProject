import React from "react";
import Main from "../Stackoverflow/Main";
import Sidebar from "../Stackoverflow/Sidebar";
import MainQuestion from "./MainQuestion";

const index = () => {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <MainQuestion />
      </div>
    </div>
  );
};

export default index;
