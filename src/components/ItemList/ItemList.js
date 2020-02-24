import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import SwapiService from '../../services/SwapiService';

import './ItemList.css';

export default class ItemList extends Component {
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

  render() {
    const { peopleList } = this.state;

    return (
      <ul className='item-list list-group'>
        {!peopleList ? <Loader /> : this.renderPeople(peopleList)}
      </ul>
    );
  }
}
