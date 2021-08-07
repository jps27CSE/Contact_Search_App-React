import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-listComponent';
import { SearchBox } from './components/search-box/search-boxComponent'
class App extends Component {

  constructor() {
    super()

    this.state = {
      persons: [],
      searchField: ''
    }
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ persons: users }))
  }

  render() {

    const { persons, searchField } = this.state

    const filterSearch = persons.filter(person =>
      person.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Contact</h1>
        <SearchBox
          placeholder="Search"
          handleChange={this.handleChange}
        />
        <CardList persons={filterSearch} />
      </div>
    );
  }
}

export default App;
