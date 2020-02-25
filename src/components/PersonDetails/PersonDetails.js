import React, {Component} from 'react';
import Loader from '../Loader/Loader';
import SwapiService from '../../services/SwapiService';

import './PersonDetails.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    loading: false,
    person: null
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    if (!this.props.personId) {
      return;
    }
    this.setState({loading: true});
    this.swapiService.getPerson(this.props.personId).then(person => {
      this.setState({person, loading: false});
    });
  }

  render() {
    if (!this.state.person) {
      return <div className="person-details card"><span >Select a person from list</span></div>
    }
    if (this.state.loading) {
      return <Loader />;
    }

    const {name, gender, birthYear, eyeColor, id} = this.state.person;

    return (
      <div className='person-details card'>
        <img
          className='person-image'
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />

        <div className='card-body'>
          <h4>
            {name} {id}
          </h4>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <span className='term'>Gender</span>
              <span>{gender}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
