import React, {Component} from 'react';
import Row from './components/Row/Row'
import SwapiService from './services/SwapiService'
import Header from './components/Header/Header';
import RandomPlanet from './components/RandomPlanet/RandomPlanet';
import ItemList from './components/ItemList/ItemList';
import PersonDetails from './components/PersonDetails/PersonDetails';

import './App.css';
export default class App extends Component {
  swapiService = new SwapiService()

  state = {
    selectedPerson: null
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />

        <Row 
          left={
            <ItemList 
              onItemSelected={this.onPersonSelected} 
              getData={this.swapiService.getAllPeople}
              renderItem={({name, gender, birthYear}) => (`${name} (${gender}, ${birthYear})`)}
            />
          } 
          right={<PersonDetails personId={this.state.selectedPerson} />} 
        />

        {/* <Row 
          left={
            <ItemList 
              onItemSelected={this.onPersonSelected} 
              getData={this.swapiService.getAllPlanets}
              renderItem={item => item.name}
            />
          }
          right={
            <PersonDetails personId={this.state.selectedPerson} />
          }
        />

        <Row 
          left={
            <ItemList 
              onItemSelected={this.onPersonSelected} 
              getData={this.swapiService.getAllStarships}
              renderItem={item => item.name}
            />
          }
          right={
            <PersonDetails personId={this.state.selectedPerson} />
          }
        /> */}
      </div>
    );
  }
}
