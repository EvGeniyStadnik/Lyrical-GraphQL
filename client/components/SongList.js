import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {

  renderSongs() {
    const { songs, loading } = this.props.data;
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
      </div>
    )
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);