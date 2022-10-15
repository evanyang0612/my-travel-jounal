import React from "react";
import globe from "../img/globe.png";

export default function Header() {
  return (
    <div className="header">
      <img src={globe} alt="globe" />
      <h3 className="header-title">my travel journal</h3>
    </div>
  );
}
