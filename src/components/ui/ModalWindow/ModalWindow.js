import React, { Component } from "react";
import PropTypes from 'prop-types';

import { Modal } from "semantic-ui-react";

class ModalWindow extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    confirmText: PropTypes.string.isRequired,
    cancelText: PropTypes.string,
    modal: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  };

  static defaultProps = {
    heading: '',
    cancelText: 'Cancel',
  }

  render() {
    const { heading, confirmText, cancelText, modal, onSubmit, onCancel } = this.props;

    return (
      <Modal open={modal.isOpen}>
        <button type="button" className="btn-close modal-close" onClick={() => onSubmit()} />
        <h2>{heading}</h2>
        <Modal.Actions>
          <button type="button" className="btn-cancel" onClick={() => onCancel()}>{cancelText}</button>
          <button type="button" className="btn btn-green" onClick={() => onSubmit()}>{confirmText}</button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalWindow;
