import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      who: ''
    }
  }
updateWorld = () => {
  this.setState({
    who: 'World!'
  })
}

updateFriend = () => {
  this.setState({
    who: 'Friend!'
  })
}

updateReact = () => {
  this.setState({
    who: 'React!'
  })
}

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={this.updateWorld} >World</button>
        <button onClick={this.updateFriend}>Friend</button>
        <button onClick={this.updateReact}>React</button>
      </div>
    )
  }
}

export default HelloWorld;