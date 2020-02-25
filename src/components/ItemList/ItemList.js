import React, {Component} from 'react';
import Loader from '../Loader/Loader';

import './ItemList.css';

export default class ItemList extends Component {
  state = {
    itemList: null
  };

  componentDidMount() {
    this.props.getData()
      .then(itemList => this.setState({itemList, loading: false}));
  }

  renderItems = arr => {
    return arr.map(item => {

      const { id } = item
      const label = this.props.renderItem(item)
      return (
        <li
          key={id}
          className='list-group-item'
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      )
    });
  };

  render() {
    const {itemList} = this.state;

    return (
      <ul className='item-list list-group'>
        {!itemList ? <Loader /> : this.renderItems(itemList)}
      </ul>
    );
  }
}
