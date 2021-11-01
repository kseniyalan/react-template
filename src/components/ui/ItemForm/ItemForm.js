import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import classnames from 'classnames';
import InputCounter from "../InputCounter/InputCounter";

import {
  setItemName,
  setItemColor,
} from '../../../redux/actions/itemsList';

const mapDispatchToProps = dispatch => ({
  setItemName: value => dispatch(setItemName(value)),
  setItemColor: value => dispatch(setItemColor(value)),
});

class ItemForm extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    setItemName: PropTypes.func.isRequired,
    setItemColor: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      formWasSent: false,
      validationError: false,
    }
  }

  onSubmitForm = () => {
    const { onSubmit } = this.props;
    const validationError = this.validateForm();
    this.setState({ formWasSent: true });
    if (!validationError) {
      this.setState({ formWasSent: false });
      onSubmit();
    } 
  }

  validateForm = () => {
    const { item } = this.props;
    if ((item.name.length === 0) || (item.name.length > 60)) return true;
    if ((item.color.length === 0) || (item.color.length > 50)) return true;
    return false;
  }

  render() {
    const { item, setItemName, setItemColor } = this.props;
    const { formWasSent } = this.state;

    const itemNameError = ((item.name.length === 0) || (item.name.length > 60)) ? true : false;
    const itemColorError = ((item.color.length === 0) || (item.color.length > 50)) ? true : false;

    const nameRowClass = classnames({
      'form-row': true,
      'error': formWasSent && itemNameError,
    });

    const colorRowClass = classnames({
      'form-row': true,
      'error': formWasSent && itemNameError,
    });

    let nameErrorText = '';
    if (item.name.length === 0) nameErrorText = 'Item name field cannot be empty';
    if (item.name.length > 60) nameErrorText = 'The maximum length of the item name has been exceeded';

    let colorErrorText = '';
    if (item.color.length === 0) colorErrorText = 'Item color field cannot be empty';
    if (item.color.length > 50) colorErrorText = 'The maximum length of the item color has been exceeded';

    return (
      <div className="form-wrap">
        <div className={nameRowClass}>
          <InputCounter
            label="Item name"
            value={item.name}
            onChange={setItemName}
            maxLength={60}
          />
          {(formWasSent && itemNameError) ? (
            <div className="input-text">{nameErrorText}</div>
          ) : false}
        </div>

        <div className={colorRowClass}>
          <InputCounter
            label="Item color"
            value={item.color}
            onChange={setItemColor}
            maxLength={50}
          />
          {(formWasSent && itemColorError) ? (
            <div className="input-text">{colorErrorText}</div>
          ) : false}
        </div>

        <div className="form-row special">
            <button
              type="button"
              className="btn btn-green"
              onClick={() => this.onSubmitForm()}
            >
              Submit
            </button>
          </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(ItemForm);
