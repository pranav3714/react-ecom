import React from "react";
import MenuItem from "../../components/menu-items";
import { categories } from "../../data";
import "./Homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="first-directory-row">
          {categories.slice(0, 3).map(({ title, imageUrl, id }) => (
            <MenuItem key={id} imageUrl={imageUrl} title={title} />
          ))}
        </div>
        <div className="remaining-directory-row">
          {categories.slice(3).map(({ title, imageUrl, id, size }) => (
            <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
