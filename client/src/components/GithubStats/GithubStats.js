import React from "react";

import Search from '../Search/Search';
import Display from '../Display/Display';
import Message from '../Message/Message';

import { defaultUser } from '../../defaultData';
import { fetchUser } from '../../api/server';

class GithubStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      userName: '',
      error: ''
    }
  }

  handleSearchClick = (event) => {
    const userName = event.target.value;

    this.setUser(userName);
  }

  setUser = (username) => {
    fetchUser(username).then((response) => {
        this.setState({
          user: response.data,
          error: ''
        })
    }).catch(error => {
      this.setState({
        error: `User ${username} not found`,
        user: defaultUser
      })
    })
  }

  render() {
    return (
      <div>
        <Search handleClick={this.handleSearchClick} />
        <Display user={this.state.user} />
        <Message message={this.state.error !== '' || this.state.userName !== '' ? this.state.error : null}/>
      </div>
    );
  }
}

export default GithubStats;
