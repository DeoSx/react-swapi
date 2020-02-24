<<<<<<< HEAD
import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService'
=======
import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import SwapiService from '../../services/SwapiService';
>>>>>>> ed33c3ec615214558c53639bc0449c112f7a9a99

import './ItemList.css';

export default class ItemList extends Component {
<<<<<<< HEAD

  state = {
    peopleList: null
  }

  swapiService = new SwapiService()

  // renderPeople = () => {
  //   const people = this.swapiService.getAllPeople().then(peopleList => {
  //     this.setState({peopleList})
  //   })
  // }

  // componentDidMount() {
  //   // this.renderPeople()
  //   this.swapiService.getAllPeople().then(peopleList => {
  //     this.setState({peopleList})
  //   })    
  //   console.log(this.state)
  // }
=======
  state = {
    peopleList: null
  };

  async componentDidMount() {
    const swapiService = new SwapiService();
    await swapiService
      .getAllPeople()
      .then(peopleList => this.setState({ peopleList, loading: false }));
  }

  renderPeople = arr => {
    return arr.map(({ name, id }) => (
      <li
        key={id}
        className='list-group-item'
        onClick={() => this.props.onItemSelected(id)}
      >
        {name}
      </li>
    ));
  };

>>>>>>> ed33c3ec615214558c53639bc0449c112f7a9a99
  render() {
    const { peopleList } = this.state;

    return (
      <ul className='item-list list-group'>
        {!peopleList ? <Loader /> : this.renderPeople(peopleList)}
      </ul>
    );
  }
}
