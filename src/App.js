import './App.css';
import React from 'react';
import CardList from './CardList'
import 'tachyons';
import { kitties } from './kitties'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello Kittyfriends!</h1>
        <CardList kitties={kitties} />
      </div>
    )
  }
}

export default App;
