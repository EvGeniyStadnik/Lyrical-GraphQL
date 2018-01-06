import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

import FetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) { return <div>Loading...</div>; }

    return (
      <div>
        <Link to="/" >Song List</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(FetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);