import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 9

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          
          <Switch>
          <Route exact path="/">
            <NewsComponent key="" pageSize={this.pageSize} country="in" category="general"></NewsComponent>
          </Route>
          <Route exact path="/general">
            <NewsComponent key="general" pageSize={this.pageSize} country="in" category="general"></NewsComponent>
          </Route>
          <Route exact path="/entertainment">
            <NewsComponent key="entertainment"pageSize={this.pageSize} country="in" category="entertainment"></NewsComponent>
          </Route>
          <Route exact path="/buisness">
            <NewsComponent key="buisness"pageSize={this.pageSize} country="in" category="buisness"></NewsComponent>
          </Route>
          <Route exact path="/health">
            <NewsComponent key="health"pageSize={this.pageSize} country="in" category="health"></NewsComponent>
          </Route>
          <Route exact path="/science">
            <NewsComponent key="science"pageSize={this.pageSize} country="in" category="science"></NewsComponent>
          </Route>
          <Route exact path="/sports">
            <NewsComponent key="sports"pageSize={this.pageSize} country="in" category="sports"></NewsComponent>
          </Route>
          <Route exact path="/technology">
            <NewsComponent key="technology"pageSize={this.pageSize} country="in" category="technology"></NewsComponent>
          </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

