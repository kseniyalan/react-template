import React, { Component } from "react";
import RequireAuth from "../../layout/HOC/require-auth";

import "./PageNotFound.scss";

class PageNotFound extends Component {
  render() {
    return (
      <div className="not-found-layout">
        <div className="not-found-wrap">
          <div className="not-found-code">404</div>
          <div className="not-found-text">Page is not found</div>
        </div>
      </div>
    );
  }
}

export default RequireAuth(PageNotFound);
