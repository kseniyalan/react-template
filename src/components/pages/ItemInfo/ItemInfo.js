import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { push } from "connected-react-router";

import Spinner from "../../ui/Spinner/Spinner";
import RequireAuth from "../../layout/HOC/require-auth";
import "./ItemInfo.scss";

import { getItemInfoAsync } from "../../../redux/actions/itemInfo";

const mapStateToProps = state => ({
  ...state.itemInfo,
});

const mapDispatchToProps = dispatch => ({
  onGoBack: () => dispatch(push('/items')),
  getItemInfo: itemId => dispatch(getItemInfoAsync(itemId)),
});

class ItemInfo extends Component {
  static propTypes = {
    ready: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    item: PropTypes.object.isRequired,
    onGoBack: PropTypes.func.isRequired,
    getItemInfo: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getItemInfo } = this.props;
    const itemId= this.props.match.params.itemId;
    getItemInfo(itemId);
  }

  render() {
    const { ready, loading, item, onGoBack } = this.props;

    return (
      <div className="page-wrapper">
        {ready ? (
          <React.Fragment>
            <div className="page-header">
              <button type="button" className="btn btn-back" onClick={() => onGoBack()}>
                Back
              </button>
            </div>
          
            <div className="page-content forms">
              <div className="title-wrap">
                <h1 className="page-title">{item.name}</h1>
              </div>
            </div>
          </React.Fragment>
        ) : false}
        {loading ? (<Spinner />) : false}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequireAuth(ItemInfo));
