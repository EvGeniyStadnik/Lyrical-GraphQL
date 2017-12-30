import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongCreate extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: '',
    }

  }

  handleSubmit (event) {
    event.preventDefault();
    console.log(this.props);
    if (this.state.title === '') return;
    this.props.mutate({
      variables: {
        title: this.state.title,
      }
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
        <h3>Create a new Song</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Title of song:</label>
          <input
            onChange={this.handleChange.bind(this)}
            value={this.state.value}
          />
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