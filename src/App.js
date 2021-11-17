import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 9
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#ff4747'
            progress={this.state.progress}

          />
          <Switch>
            <Route exact path="/">
              <NewsComponent setProgress={this.setProgress} apiKey={this.apiKey}  key="" pageSize={this.pageSize} country="in" category="general"></NewsComponent>
            </Route>
            <Route exact path="/general">
              <NewsComponent setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="in" category="general"></NewsComponent>
            </Route>
            <Route exact path="/entertainment">
              <NewsComponent setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"></NewsComponent>
            </Route>
            <Route exact path="/buisness">
              <NewsComponent setProgress={this.setProgress} apiKey={this.apiKey}  key="buisness" pageSize={this.pageSize} country="in" category="buisness"></NewsComponent>
            </Route>
            <Route exact path="/health">
              <NewsComponent setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} country="in" category="health"></NewsComponent>
            </Route>
            <Route exact path="/science">
              <NewsComponent setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country="in" category="science"></NewsComponent>
            </Route>
            <Route exact path="/sports">
              <NewsComponent setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country="in" category="sports"></NewsComponent>
            </Route>
            <Route exact path="/technology">
              <NewsComponent setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country="in" category="technology"></NewsComponent>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

