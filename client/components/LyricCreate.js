import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricCreate extends Component {

  constructor(props){
    super(props);

    this.state = {
      lyric: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const { mutate, songId } = this.props;

    mutate({
      variables: {
        content: this.state.lyric,
        songId,
      }
    })
      .then(() => {
        this.setState({ lyric: '' })
      })
  }

  handleChange(e){
    const value = e.target.value;
    this.setState({
      lyric: value
    })
  }

  render() {
    console.log('LyricCreate render this.props ', this.props);
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Add Lyric</label>
        <input
          type="text"
          onChange={this.handleChange.bind(this)}
          value={this.state.lyric}
        />
      </form>
    );
  }
}

const AddLyricToSong = gql`
  mutation AddLyricToSong($content: String, $songId: ID){
    addLyricToSong(content: $content, songId: $songId){
      id
      lyrics{
        id
        likes
        content
      }
    }
  }
`;

export default graphql(AddLyricToSong)(LyricCreate);






















