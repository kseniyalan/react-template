import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import classnames from "classnames";
import { CSSTransition } from 'react-transition-group';

import "./message.scss";

import {
  hideErrorMessage,
  hideSuccessMessage,
  hideWarningMessage
} from '../../../redux/actions/ui';

const mapDispatchToProps = dispatch => ({
  hideErrorMessage: () => dispatch(hideErrorMessage()),
  hideSuccessMessage: () => dispatch(hideSuccessMessage()),
  hideWarningMessage: () => dispatch(hideWarningMessage()),
});

class Message extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    show: PropTypes.bool.isRequired,
    hideErrorMessage: PropTypes.func.isRequired,
    hideSuccessMessage: PropTypes.func.isRequired,
    hideWarningMessage: PropTypes.func.isRequired,
  };
  
  static defaultProps = {
    type: 'error',
  }

  componentDidUpdate() {
    const { type } = this.props;
    if (type === 'success') this.hideMessage();
  }

  hideMessage = () => {
    setTimeout(() => {
      this.onCloseMessage();
    }, 5000);
  }

  onCloseMessage = () => {
    const { type, hideErrorMessage, hideSuccessMessage, hideWarningMessage } = this.props;
    switch (type) {
      case 'error':
        hideErrorMessage();
        return;
      case 'success':
        hideSuccessMessage();
        return;
      case 'warning':
        hideWarningMessage();
        return;
      default:
        hideErrorMessage();
        return;
    }
  }

  render() {
    const { text, type, show } = this.props;
    const msgClass = classnames({
      'message': true,
      'success': type === 'success',
      'error': type === 'error',
      'warning': type === 'warning',
    });

    return (
      <CSSTransition in={show} timeout={500} unmountOnExit classNames="message">
        <div className={msgClass}>
          <div className="msg-wrap">
            <div className="msg-bg" />
            <div className="msg-content">
              <div className="close-btn" onClick={() => this.onCloseMessage()} />
              <div className="msg-icon" />
              {text}
            </div>
          </div>
        </div>
      </CSSTransition> 
    );
  }
}

export default connect(null, mapDispatchToProps)(Message);