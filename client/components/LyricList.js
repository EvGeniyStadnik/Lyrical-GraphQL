import React, { Component } from 'react';

class LyricList extends Component {
  render() {
    const { lyrics } = this.props;
    console.log('LyricList this.props ', this.props);
    return (
      <div>
        <ul className="collection">
          {lyrics.map(({content, id}) => (
            <li key={id} className="collection-item">
              {content}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LyricList;