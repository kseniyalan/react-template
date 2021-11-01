import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import SidebarBlock from "./Sidebar/Sidebar";
import Message from "../ui/Message/Message";

const mapStateToProps = state => ({
  ...state.ui,
});

const mapDispatchToProps = dispatch => ({
});

class Layout extends Component {
  static propTypes = {
    errorMsg: PropTypes.object.isRequired,
    successMsg: PropTypes.object.isRequired,
    warningMsg: PropTypes.object.isRequired,
  };

  render() {
    const { errorMsg, successMsg, warningMsg } = this.props;

    return (
      <React.Fragment>
        <SidebarBlock />
        <div className="main-content">
          {/*  Global error message --> */}
          <Message text={errorMsg.text} show={errorMsg.show} />
          
          {/*  Global success message --> */}
          <Message type='success' text={successMsg.text} show={successMsg.show} />

          {/*  Global info message --> */}
          <Message type='warning' text={warningMsg.text} show={warningMsg.show} />

          {/*  Pages components --> */}
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
