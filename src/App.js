import './App.css';
import React from 'react';
import CardList from './CardList'
import 'tachyons';
import { kitties } from './kitties'

class App extends React.Component {
  render() {
    return (
      <div className='tc'>
        <p className="main-header">Kittyfriends</p>
        <CardList kitties={kitties} />
      </div>
    )
  }
}

export default App;
