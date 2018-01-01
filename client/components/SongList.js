import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import fetchSongs from '../queries/fetchSongs';

class SongList extends Component {

  handleDeleteSong(id){
    const { mutate, data } = this.props;
    mutate({
      variables: {
        id
      },
    })
      .then(() => data.refetch())
  }

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
                <i onClick={() => this.handleDeleteSong(id)} className="material-icons">close</i>
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

const DeleteSong = gql`
  mutation($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(DeleteSong)(
  graphql(fetchSongs)(SongList)
);