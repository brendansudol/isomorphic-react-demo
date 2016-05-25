import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {count: 0};
  }

  handleClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <h1>hey {this.props.name}!</h1>
        <button onClick={this.handleClick}>Clicks: {this.state.count}</button>
      </div>
    );
  }
}

export default App
