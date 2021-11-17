import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  let pageSize = 9
  let apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  const updateProgress = (progress) => {
    setProgress(progress);
  }

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#ff4747'
          progress={progress}

        />
        <Switch>
          <Route exact path="/">
            <NewsComponent updateProgress={updateProgress} apiKey={apiKey} key="" pageSize={pageSize} country="in" category="general"></NewsComponent>
          </Route>
          <Route exact path="/general">
            <NewsComponent updateProgress={updateProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"></NewsComponent>
          </Route>
          <Route exact path="/entertainment">
            <NewsComponent updateProgress={updateProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"></NewsComponent>
          </Route>
          <Route exact path="/buisness">
            <NewsComponent updateProgress={updateProgress} apiKey={apiKey} key="buisness" pageSize={pageSize} country="in" category="buisness"></NewsComponent>
          </Route>
          <Route exact path="/health">
            <NewsComponent updateProgress={updateProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"></NewsComponent>
          </Route>
          <Route exact path="/science">
            <NewsComponent updateProgress={updateProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"></NewsComponent>
          </Route>
          <Route exact path="/sports">
            <NewsComponent updateProgress={updateProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"></NewsComponent>
          </Route>
          <Route exact path="/technology">
            <NewsComponent updateProgress={updateProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"></NewsComponent>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App