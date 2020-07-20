import React from "react";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size} menu-item`}
      onClick={() =>
        history.push(`${history.url}/category/${title.toLowerCase()}`)
      }
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
