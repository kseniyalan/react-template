import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import RequireAuth from "../../layout/HOC/require-auth";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

class PageTemplate3 extends Component {
  static propTypes = {
  };

  render() {
    const {

    } = this.props;
    return (
      <div className="page-wrapper">
        Page 3
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequireAuth(PageTemplate3));
