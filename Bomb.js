import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  bombTime = () => {
    const { count } = this.state
    if (count >= 8) {
      clearInterval(this.interval)
      return 'BOOM!!'
    } else if (count % 2 === 0) {
      return 'tick'
    }
    return 'tock'
  }

  render() {
    return (
      <div>
        <p>{this.bombTime()}</p>
      </div>
    )
  }
}

export default Bomb;