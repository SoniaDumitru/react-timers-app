import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        time: 0
      }
  }

  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000)
  }

  clockTick = () => {
    this.setState({
      time: this.state.time + 1
    })
  }

  handleClose = () => {
    this.props.removeTimer(this.props.id)
  }

  stopClock = () => {
    clearInterval(this.interval)
  }

  render() {
    return(

        <section>
          <h1> {this.state.time} seconds elapsed since mounting! </h1>
          <button onClick= {this.handleClose}>x</button>
          <button onClick={ this.stopClock }>Stop</button>
        </section>

    )
  }
}

export default Timer

