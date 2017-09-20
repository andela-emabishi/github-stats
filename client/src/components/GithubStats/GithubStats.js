import React from "react";

import Search from '../Search/Search';
import Display from '../Display/Display';

import defaultUser from '../../defaultData';

class GithubStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      userName: '',
    }
  }

  handleSearchClick = (event) => {
    const userName = event.target.value;
    // debounce input with setTimeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const timeoutId = setTimeout(() => {
      this.setState({ userName })
    }, 1500);
  }

  render() {
    return (
      <div>
        <Search handleClick={this.handleSearchClick}/>
        <Display user={this.state.user}/>
      </div>
    );
  }
}

export default GithubStats;
