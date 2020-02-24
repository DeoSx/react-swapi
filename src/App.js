import React, {Component} from 'react';

import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import ItemList from './components/ItemList/ItemList';
import PersonDetails from './components/PersonDetails/PersonDetails';

import './App.css';
export default class App extends Component {
  state = {
    selectedPerson: null
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
    console.log(id);
  };

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className='col-md-6'>
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
