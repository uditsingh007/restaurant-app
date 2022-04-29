import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper-info">
        <SubHeading title="Chase the new flavor" />
        <h1 className="app__header-h1">The Key to fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
          Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
          Aliquam Amet Tellus
        </p>
        <button type="button" className="custom__button">
          Explore
        </button>
      </div>
      <div className="app__wrapper-img">
        <img src={images.welcome} alt="welcome" />
      </div>
    </div>
  );
};

export default Header;
