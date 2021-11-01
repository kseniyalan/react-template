import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";

import LoginPage from "./components/pages/LoginPage/LoginPage";

import ItemsListPage from "./components/pages/ItemsListPage/ItemsListPage";
import ItemInfo from "./components/pages/ItemInfo/ItemInfo";
import CreateItem from "./components/pages/CreateItem/CreateItem";

import PageTemplate2 from "./components/pages/PageTemplate2/PageTemplate2";
import PageTemplate3 from "./components/pages/PageTemplate3/PageTemplate3";

import PageNotFound from "./components/pages/PageNotFound/PageNotFound";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Layout>
          <Switch>
            <Route path='/items' component={ItemsListPage} />
            <Route path='/item/:itemId' component={ItemInfo} />
            <Route path='/create-item' component={CreateItem} />

            <Route path='/page2' component={PageTemplate2} />
            <Route path='/page3' component={PageTemplate3} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </Layout> 
      </Switch>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
