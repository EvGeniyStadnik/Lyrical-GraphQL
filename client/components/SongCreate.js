import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import fetchSongs from '../queries/fetchSongs';

class SongCreate extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: '',
      loading: false,
    }

  }

  handleSubmit (event) {
    event.preventDefault();
    if (this.state.title === '') return;
    this.setState({ loading: true });
    this.props.mutate({
      variables: {
        title: this.state.title,
      },
      refetchQueries: [{ query: fetchSongs }]
    }).then(() => {
      hashHistory.push("/");
      this.setState({ loading: false });
    });
  }

  handleChange (e) {
    this.setState({
      title: e.target.value,
    })
  };

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a new Song</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Title of song:</label>
          <input
            onChange={this.handleChange.bind(this)}
            value={this.state.value}
          />
          { this.state.loading && <div>Loading list....</div> }
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation($title: String){
    addSong(title: $title){
      title
    }  
  }
`;

export default graphql(mutation)(SongCreate);