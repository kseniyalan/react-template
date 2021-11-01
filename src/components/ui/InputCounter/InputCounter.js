import React, { Component } from "react";
import PropTypes from 'prop-types';

class InputCounter extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    maxLength: PropTypes.number.isRequired,
    isTextarea: PropTypes.bool,
    classNameText: PropTypes.string,
  };

  static defaultProps = {
    isTextarea: false,
    classNameText: '',
  };

  render() {
    const { label, value, onChange, maxLength, isTextarea, classNameText } = this.props;
    const length = value.length;

    return (
      <div className={'input-wrap' + ((isTextarea && classNameText.length > 0) ? ` ${classNameText}` : '')}>
        <label htmlFor="address">{label}</label>
        <div className="input-content">
        {isTextarea ? (
          <textarea
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            maxLength={maxLength}
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            maxLength={maxLength}
          />
        )}
        <div className="counter">{length}/{maxLength}</div>
        </div>
      </div>
    );
  }
}

export default InputCounter;
