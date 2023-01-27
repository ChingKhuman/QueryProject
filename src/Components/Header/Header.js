import { Avatar } from "@material-ui/core";
import { Inbox, Search } from "@material-ui/icons";
import { Input } from "@mui/material";
import React from "react";
import "./css/Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <img
            src="https://www.shareicon.net/data/128x128/2016/12/02/860658_media_463x512.png"
            alt="logo"
          />
          <h3>Products</h3>
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <Search />
            <input type="text" placeholder="Search....." />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
            <Avatar />
            <Inbox />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
