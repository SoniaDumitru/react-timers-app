import React from 'react';
import './App.css';
import Timer from './Timer'

class App extends React.Component {
constructor() {
  super()
    this.state = {
      timerIDS: []
    }
}

  handleAddTimer =()=> {
    let timerIDS = this.state.timerIDS
    this.setState({
      timerIDS: [...timerIDS, Math.floor(Math.random()*1000)]
    })
    // console.log(this.state.timerIDS)
  }

  render() {
    return (
      <div className="App">
        <h1>Timer</h1>
          <button onClick={this.handleAddTimer}>Add New Timer</button>
          <div>{this.state.timerIDS.map(id => <Timer id={id} key={id}/>)}</div>
      </div>
    );
  }
}


export default App;
