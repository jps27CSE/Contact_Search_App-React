import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-listComponent';

class App extends Component {

  constructor() {
    super()

    this.state = {
      persons: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ persons: users }))
  }

  render() {

    const{persons,searchField} = this.state

    const filterSearch = persons.filter(person => 
       person.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <input type="search" placeholder="Search" 
         onChange={e=>{this.setState({searchField: e.target.value})}}
        />
        <CardList persons={filterSearch}/>
      </div>
    );
  }
}

export default App;
