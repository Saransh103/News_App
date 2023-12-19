import React, { Component } from "react";
import Logo from "../images/Logo.png";

export default class Newsitem extends Component {
  render() {
    let { newsURL, title, description, image } = this.props;

    // Ensure title and description are not null or undefined
    const limitedTitle = title ? (title.length > 40 ? title.substring(0, 40) + "..." : title) : "";
    const limitedDescription = description ? (description.length > 88 ? description.substring(0, 88) + "..." : description) : "";

    return (
      <div id="Newscard" className="card" >
        <div className="container">
          <img src={image} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h6 className="card-title">{limitedTitle}</h6>
          <p className="card-text">{limitedDescription}</p>
          <a href={newsURL} target="_blank" className="btn btn-primary">
            Details
          </a>
        </div>
      </div>
    );
  }
}
