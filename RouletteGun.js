import React, { Component } from 'react';

export default class RouletteGun extends Component {
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  
  triggerPull = () => {
    this.setState({
      spinningTheChamber: true
    })
    this.timeout = setTimeout(() => {
      const liveChamber = Math.ceil(Math.random() * 8)
      console.log(liveChamber)
      this.setState({
        chamber: liveChamber,
        spinningTheChamber: false
      })
    }, 1000)
    console.log(this.state.chamber)
  }

  displayText = () => {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props;
    console.log(chamber,spinningTheChamber, bulletInChamber)
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (chamber === bulletInChamber) {
      return 'BANG!!!!!'
    } else {
      return "You're safe!"
    }
  }

  render() {
    return (
      <div>
        <h2>Want to play Russian roulette?</h2>
        <p>{this.displayText()}</p>
        <button onClick={this.triggerPull}>Pull the trigger</button>
      </div>
    )
  }
}