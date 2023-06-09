import './App.css';
import React from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import 'tachyons';
import { kitties } from './kitties'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      kitties:kitties,
      searchfield:''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield:event.target.value})
  }

  render() {
    const filteredKitties = this.state.kitties.filter(kitty => kitty.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
    return (
      <div className='tc'>
        <p className="main-header">Kittyfriends</p>
        <SearchBox searchChangeFunction={this.onSearchChange}/>
        <CardList kitties={filteredKitties} />
      </div>
    )
  }
}

export default App;
