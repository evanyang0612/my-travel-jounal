import React from "react";
import icon from "../img/icon.png";

export default function MainContent(props) {
  console.log(props);
  return (
    <div className="main">
      <img className="main--img" src={props.item.imageUrl} alt="scenary" />
      <div className="main--container">
        <div className="main--location-container">
          <img className="main--icon" src={icon} alt="icon" />
          <h3 className="main--location">{props.item.location}</h3>
          <a className="main--google" href={props.item.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="main--title">{props.item.title}</h2>
        <p className="main--date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="main--text">{props.item.description}</p>
      </div>
    </div>
  );
}
