import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import '../style/style.css';

class LyricList extends Component {

  handleLike(id){
    this.props.mutate({
      variables: { id }
    });
  }

  render() {
    const { lyrics } = this.props;

    return (
      <div>
        <ul className="collection">
          {lyrics.map(({content, id, likes}) => (
            <li key={id} className="collection-item">
              {content}
              <div className='voteLyric'>
                <i
                  className='material-icons thumbUp'
                  onClick={() => this.handleLike(id)}
                >
                  thumb_up
                </i>
                {likes}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const LikeLyric = gql`
  mutation LikeLyric($id: ID){
    likeLyric(id: $id){
      id
      likes
    }
  }
`;

export default graphql(LikeLyric)(LyricList);