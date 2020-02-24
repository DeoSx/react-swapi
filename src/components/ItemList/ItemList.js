import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService'

import './ItemList.css';

export default class ItemList extends Component {

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
  render() {
    return (
      <ul className='item-list list-group'>
        <li className='list-group-item'>Luke Skywalker</li>
        <li className='list-group-item'>Darth Vader</li>
        <li className='list-group-item'>R2-D2</li>
      </ul>
    );
  }
}
