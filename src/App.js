import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import NewsComponent from './Components/NewsComponent'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <NewsComponent pageSize={5}></NewsComponent>
      </div>
    )
  }
}

