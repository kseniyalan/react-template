import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import classnames from 'classnames';
import { push } from "connected-react-router";

import SingleItem from "./SingleItem/SingleItem";
import ItemForm from "../../ui/ItemForm/ItemForm";
import Spinner from "../../ui/Spinner/Spinner";
import RequireAuth from "../../layout/HOC/require-auth";

import "./ItemsListPage.scss";

import {
  getItemsListAsync,
  createItemAsync,
} from "../../../redux/actions/itemsList";

const mapStateToProps = state => ({
  ...state.itemsList,
});

const mapDispatchToProps = dispatch => ({
  getItemsList: payload => dispatch(getItemsListAsync(payload)),
  onClickItem: itemId => dispatch(push(`/item/${itemId}`)),
  onCreateItem: () => dispatch(createItemAsync()),
});

class ItemsListPage extends Component { 
  static propTypes = {
    ready: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    onCreateItem: PropTypes.func.isRequired,
    getItemsList: PropTypes.func.isRequired,
    onClickItem: PropTypes.func.isRequired,
  };

  componentDidMount = () => { 
    const { getItemsList } = this.props;
    const payload = {
      limit: 100,
    };
    getItemsList(payload);
  }

  renderItemsList = (item, i) => {
    const { onClickItem } = this.props;
    return(
      <SingleItem
        key={`${item.id}_${i}`}
        item={item}
        onClickItem={(id) => onClickItem(id)}
      />
    );
  }
  render() {
    const { ready, loading, items, onCreateItem } = this.props;

    const contentClass = classnames({
      'page-content': true,
      'hollow': items.length === 0,
    });

    return (
      <div className="page-wrapper">
        <div className="page-header">
          <button type="button" className="btn btn-green" onClick={() => onCreateItem()}>Create item</button>
        </div>
        {ready ? (
          <React.Fragment>

            <div className={contentClass}>
              <div className="form-header">Add new item</div>
              <ItemForm
                item={item}
                submitText="Add"
                onSubmit={() => onCreateItem()}
              />
              {items.length !== 0 ? 
                items.map(this.renderItemsList)
              : (
                <div className="hollow-text">
                    No items for now. <br />
                    Create your first item
                </div>
              )}
            </div>
            <div className="page-footer" />
          </React.Fragment>
        ) : false}
        {loading ? (<Spinner />) : false}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequireAuth(ItemsListPage));
