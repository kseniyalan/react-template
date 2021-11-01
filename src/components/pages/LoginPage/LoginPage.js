import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import classnames from 'classnames';

import { tempSignIn, clearServerErrors } from '../../../redux/actions/auth';

import RequireUnauth from "../../layout/HOC/require-unauth";

import "./LoginPage.scss";

const mapStateToProps = state => ({
  ...state.auth,
});

const mapDispatchToProps = dispatch => ({
  //TEMPORARY EMULATION OF AUTHORIZATION FOR TEMPLATE
  onSubmit: (login, password) => dispatch(tempSignIn()),
  //onSubmit: (login, password) => dispatch(signInAsync(login, password)),
  clearServerErrors: () => dispatch(clearServerErrors()),
});

class LoginPage extends Component {
  static propTypes = {
    serverError: PropTypes.bool.isRequired,
    loginError: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    clearServerErrors: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
      formWasSent: false,
      validError: false,
      errorText: '',
    };
  }

  componentDidMount = () => {
    const { clearServerErrors } = this.props;
    clearServerErrors();
  }

	onChangeInput = (field, value) => {
		this.setState({[field]: value});
  }

  validateForm = () => {
    const { login, password } = this.state;
    if ((login.length < 5) || (password.length < 5)) {
      this.setState({validError: true});
      return true;
    }
    return false;
  }
  
  onSubmitForm = () => {
    const { onSubmit } = this.props;
    const { login, password } = this.state;
    const validationError = this.validateForm();
    this.setState({ formWasSent: true });
    if (!validationError) onSubmit(login, password);
  }

  clearErrors = () => {
    const { clearServerErrors } = this.props;
    clearServerErrors();
    this.setState({ validError: false });
  }

  render() {
    const { serverError, loginError } = this.props;
    const { login, password, formWasSent, validError } = this.state;
    const loginRowClass = classnames({
      'login-row': true,
      'error': loginError || (formWasSent && (login.length < 5)),
    });

    const passwordRowClass = classnames({
      'login-row': true,
      'pass': true,
      'error': loginError || (formWasSent && (password.length < 5)),
    });

    let errorText = '';
    switch(true) {
      case loginError:
        errorText = 'Incorrect username or password';
        break;
      case serverError:
        errorText = 'Something went wrong';
        break;
      case validError:
        switch(true){
          case ((login.length === 0) && (password.length === 0)):
            errorText = 'Please enter username and password';
            break;
          case ((login.length !== 0) && (password.length === 0)):
            errorText = 'Please enter password';
            break;
          case ((login.length === 0) && (password.length !== 0)):
            errorText = 'Please enter username';
            break;
          case ((login.length < 5) || (password.length < 5)):
            errorText = 'Login or password are less than 5 characters';
            break;
          default:
            errorText = 'Incorrect username or password';
        }
        break;
      default:
        errorText = 'Something went wrong';
    }
    
    return (
      <div className="ext-page-wrap login-wrap">
        <div className="login-form">
          {/* YOUR COMPANY LOGO */}
          <div className="login-logo-wrap">
            <div className="logo-text">Your logo</div>
            <div className="logo-wrapper">
              <div className="login-logo" />
            </div>
          </div>
          { serverError || loginError || validError ? (
          <div className="login-error">{errorText}</div>
          ) : false}
          <div className={loginRowClass}>
            <label htmlFor="">Username</label>
            <input
              id="login"
              type="text"
              value={login}
              onChange={(e) => this.onChangeInput('login', e.target.value)}
              onFocus={this.clearErrors}
            />
          </div>
          <div className={passwordRowClass}>
            <label htmlFor="">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => this.onChangeInput('password', e.target.value)}
              onFocus={this.clearErrors}
            />
          </div>
          <button
            type="button"
            className="btn btn-green btn-login"
            onClick={() => this.onSubmitForm()}
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequireUnauth(LoginPage));
