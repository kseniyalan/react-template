import React, { Component } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { checkAndRenewTokens } from "../../../redux/actions/auth";

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized,
});

const mapDispatchToProps = dispatch => ({
  checkAndRenewTokens: () => dispatch(checkAndRenewTokens()),
});

export default function (WrappedComponent) {
  class UnauthWrapper extends Component {
    static propTypes = {
      isAuthorized: PropTypes.bool.isRequired,
      checkAndRenewTokens: PropTypes.func.isRequired,
    };

    /*
      THE BLOCK IS TEMPORARILY HIDDEN, as there is no real server authorization
      When there wil be a real authorization with tokens, the method will check the tokens
      and then, if they are not exist or if they are expired, it will request a token update or log out
    */

    /*
    componentDidMount = () => {
      const { checkAndRenewTokens } = this.props;
      checkAndRenewTokens();
    }
    */
    
    render() {
      const { isAuthorized } = this.props;
      const prevUrl = localStorage.getItem("prevUrl");

      return !isAuthorized ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Redirect to={(prevUrl && (prevUrl.length > 1)) ? prevUrl : "/page1"} />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(UnauthWrapper);
}
