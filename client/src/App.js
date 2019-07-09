import React, { Component } from 'react';
import Upload from './components/upload';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios'

class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>hello</h1>
      <Upload/>
    </div>
  );
}
}

export default App;