import React, { Component } from "react";
import { connect } from "react-redux";

import RequireAuth from "../../layout/HOC/require-auth";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

class PageTemplate3 extends Component {

  render() {
    return (
      <div className="page-wrapper">
        Page 3
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequireAuth(PageTemplate3));
