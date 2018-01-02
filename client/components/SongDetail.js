import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

import FetchSong from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) { return <div>Loading...</div>; }

    return (
      <div>
        <Link to="/" >Song List</Link>
        <h1>{song.title}</h1>
      </div>
    );
  }
}

export default graphql(FetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);