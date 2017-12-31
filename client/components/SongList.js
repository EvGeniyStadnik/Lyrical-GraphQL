import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

import fetchSongs from '../queries/fetchSongs';

class SongList extends Component {

  renderSongs() {
    const { songs, loading } = this.props.data;
    console.log('SongList this.props.data ', this.props.data);
    return (
      loading ?
        <div>Loading...</div> :
        <ul className="collection">
          { songs.map(({ title, id }) => {
            return (
              <li key={id} className="collection-item">
                { title }
              </li>
            )
          }) }
        </ul>
    )
  }

  render(){
    return (
      <div>
        { this.renderSongs() }
        <Link
          to="/songs/new"
          className="btn-floating btn-large right red"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}

export default graphql(fetchSongs)(SongList);