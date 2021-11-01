import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Sidebar } from "semantic-ui-react";
import Modal from "../../ui/ModalWindow/ModalWindow";
import "./Sidebar.scss";

import { tempSignOutAndClose } from '../../../redux/actions/auth';
import { openCancelModal, closeCancelModal } from "../../../redux/actions/ui";

const mapStateToProps = state => ({
  cancelModal: state.ui.cancelModal,
});

const mapDispatchToProps = dispatch => ({
  //TEMPORARY EMULATION OF AUTHORIZATION FOR TEMPLATE
  logOut: () => dispatch(tempSignOutAndClose()),
  //logOut: () => dispatch(signOut()),
  openCancelModal: () => dispatch(openCancelModal()),
  closeCancelModal: () => dispatch(closeCancelModal()),
});

class SidebarBlock extends Component {
  static propTypes = {
    cancelModal: PropTypes.object.isRequired,
    logOut: PropTypes.func.isRequired,
    closeCancelModal: PropTypes.func.isRequired,
    openCancelModal: PropTypes.func.isRequired,
  };

  render() {
    const { cancelModal, openCancelModal, closeCancelModal, logOut } = this.props;

    return (
      <Sidebar className="aside" vertical="true" visible width="thin">
          <Modal
            heading="Do you really want to sign out?"
            confirmText="Sign out"
            modal={cancelModal}
            onSubmit={() => logOut()}
            onCancel={() => closeCancelModal()}
          />
          {/* YOUR COMPANY LOGO */}
          <div className="sidebar-logo-wrap">
            <div className="sidebar-text">Your logo</div>
            <div className="sidebar-wrapper">
              <div className="sidebar-logo" />
            </div>
          </div>
        <ul className="nav">
          <li>
            <NavLink
              to={'/items'}
              isActive={(match, location) => {
                if (location.pathname.match(/^\/(item|edit-item|create-item)/)) return true;
                return false;
              }}
            >
              <div className="link-wrap">
                <div className="right-border" />
                <div className="link-text">Items list</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page2"
              isActive={(match, location) => {
                if (location.pathname.match(/^\/page2/)) return true;
                return false;
              }}
            >
              <div className="link-wrap">
                <div className="right-border" />
                <div className="link-text">Page 2</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page3"
              isActive={(match, location) => {
                if (location.pathname.match(/^\/(page3|edit-page3|create-page3)/)) return true;
                return false;
              }}
            >
              <div className="link-wrap">
                <div className="right-border" />
                <div className="link-text">Page 3</div>
              </div>
            </NavLink>
          </li>
        </ul>
        <div className="sidebar-logout">
          <button type="button" className="logout-btn" onClick={() => openCancelModal()}>Sign out</button>
        </div>
      </Sidebar>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarBlock);
