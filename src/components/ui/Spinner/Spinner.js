import React, { Component } from "react";

import "./Spinner.scss";

class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <svg className="spinner-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path className="track" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
          <path className="moving" d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
            <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
    );
  }
}

export default Spinner;