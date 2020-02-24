import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import './RandomPlanet.css';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updatePlanet();
  }

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet() {
    const swapiPlanet = new SwapiService();
    const id = Math.floor(Math.random() * 25) + 3;
    // const id = 123123;
    swapiPlanet
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
<<<<<<< HEAD
    const {
      planet: {population, rotationPeriod, diameter, id, name}
    } = this.state;

    return (
      <div className='random-planet jumbotron rounded'>
        <img
          className='planet-image'
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />
        <div>
          <h4>{name}</h4>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <span className='term'>Population</span>
              <span>{population}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
=======
    const { planet, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const hasData = !(loading || errorMessage);
    const loader = loading ? <Loader /> : null;
    const content = hasData ? <PlanetData planet={planet} /> : null;

    return (
      <div className='random-planet jumbotron rounded'>
        {errorMessage}
        {loader}
        {content}
>>>>>>> ed33c3ec615214558c53639bc0449c112f7a9a99
      </div>
    );
  }
}

const PlanetData = ({ planet }) => {
  const { population, rotationPeriod, diameter, id, name } = planet;

  return (
    <React.Fragment>
      <img
        className='planet-image'
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Population</span>
            <span>{population}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
