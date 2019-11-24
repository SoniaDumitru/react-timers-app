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
  
  componentDidMount() {
    this.handleAddTimer()
  }

  removeTimer = id => {
      this.setState({
        timerIDS: this.state.timerIDS.filter(timer_id => timer_id !== id)
      })
    }

  handleAddTimer = () => {
    this.setState({
      timerIDS: [...this.state.timerIDS, Math.floor(Math.random()*1000)]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Timer</h1>
          <button onClick={this.handleAddTimer}>Add New Timer</button>
          <div>{this.state.timerIDS.map(id => <Timer id={id} key={id} removeTimer={this.removeTimer}/>)}</div>
      </div>
    );
  }
}


export default App;

