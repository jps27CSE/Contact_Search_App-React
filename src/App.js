import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-listComponent';

class App extends Component {

  constructor() {
    super()

    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ persons: users }))
  }

  render() {
    return (
      <div className="App">
        <CardList persons={this.state.persons}/>
      </div>
    );
  }
}

export default App;
