import React from "react";
import "./Homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="first-directory-row">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">SHIRTS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">WOMEN</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>
        <div className="remaining-directory-row">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">MEN</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">SUMMER</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
