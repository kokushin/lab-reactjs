import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: 'Hello, World!'}
  }

  onChange(e) {
    this.setState({message: e.target.value})
  }

  render() {
    return (
      <div>
        <input tyle="text" onChange = {this.onChange.bind(this)} />
        <p>{this.state.message}</p>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));