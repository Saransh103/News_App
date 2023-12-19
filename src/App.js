import React, { Component } from 'react'
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar';
import News from './components/News';
import Slidingwindow from './components/Slidingwindow';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from 'react-router-dom';
export default class App extends Component {
  state={
    progress:400
  }
  updateProgress =(progress) => {
      this.setState({progress:progress})
  }
  render() {
    return (
      <Router>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
       
      />
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/Business"
          element={
            <div>
              <Slidingwindow key="business1" pageSize={3} country={'in'} category={'business'} />
              <News updateProgress={this.updateProgress} key="business" pageSize={8} country={'in'} category={'business'} />
            </div>
          }
        />
        <Route
          path="/Sports"
          element={
            <div>
              <Slidingwindow key="sports1" pageSize={3} country={'in'} category={'sports'} />
              <News updateProgress={this.updateProgress} key="sports" pageSize={8} country={'in'} category={'sports'} />
            </div>
          }
        />
        <Route
          path="/Entertainment"
          element={
            <div>
              <Slidingwindow key="entertainment1" pageSize={3} country={'in'} category={'entertainment'} />
              <News updateProgress={this.updateProgress} key="entertainment" pageSize={8} country={'in'} category={'entertainment'} />
            </div>
          }
        />
        <Route
          path="/Technology"
          element={
            <div>
              <Slidingwindow key="technology1" pageSize={3} country={'in'} category={'technology'} />
              <News updateProgress={this.updateProgress} key="technology" pageSize={8} country={'in'} category={'technology'} />
            </div>
          }
        />
        <Route
          path="/Science"
          element={
            <div>
              <Slidingwindow key="science1" pageSize={3} country={'in'} category={'science'} />
              <News updateProgress={this.updateProgress} key="science" pageSize={8} country={'in'} category={'science'} />
            </div>
          }
        />
      </Routes>
    </Router>
    )
  }
}
