import './App.css';
import React from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import 'tachyons';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      kitties:[],
      searchfield:''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(kitties=> this.setState({kitties:kitties}));
  }

  onSearchChange = (event) => {
    this.setState({searchfield:event.target.value})
  }

  render() {
    const filteredKitties = this.state.kitties.filter(kitty => kitty.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
    if (this.state.kitties.length === 0) {
      return (
        <p className=" tc loading-title">Your Kittyfriends are loading in!</p>
      )
    }
    return (
      <div className='tc'>
        <p className="main-header">Kittyfriends</p>
        <SearchBox searchChangeFunction={this.onSearchChange}/>
        <Scroll>
          <CardList kitties={filteredKitties} />
        </Scroll>
      </div>
    )
  }
}

export default App;
