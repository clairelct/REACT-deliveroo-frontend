import React from "react";

const Header = ({ logo, headerImg, data }) => {
  return (
    <header>
      <div className="topbar">
        <div className="container">
          <img src={logo} alt="Logo Deliveroo" />
        </div>
      </div>
      <div className="header-content">
        <div className="container">
          <div>
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </div>
          <div>
            <img
              src={headerImg}
              alt="Image de présentation de la boutique Le Pain Quotidien"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
