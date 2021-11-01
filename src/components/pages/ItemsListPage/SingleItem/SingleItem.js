import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./SingleItem.scss";

class SingleItem extends Component { 
  static propTypes = {
    item: PropTypes.object.isRequired,
    onClickItem: PropTypes.func.isRequired,
  };

  render() {
    const { item, onClickItem } = this.props;

    return (
      <div className="row" onClick={() => onClickItem(item)}>
        <div className="cols-wrap">
        <div className="col item-name">{item.name}</div>
        <div className="col item-color">{item.color}</div>
      </div>
      </div>
    );
  }
}

export default SingleItem;
