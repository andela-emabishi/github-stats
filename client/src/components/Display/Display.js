import React from 'react';
import './display.css';


const Display = ({ user }) => {
  return (
    <div className="ui centered raised orange card">
      <a className="image">
        <img src={user.avatar_url} alt="" />
      </a>
      <div className="content">
        <a className="header">{user.name}</a>
        <div className="meta">
          <a>{user.email}</a>
          <br />
          <a href={`https://github.com/${user.login}`}>Account</a>
          <a href={`https://github.com/${user.login}/?tab=repositories`}>Repositories</a>
          <a href={`https://github.com/${user.login}?tab=followers`}>Followers</a>
          <br />
          <a>{user.location}</a>
        </div>
      </div>
    </div>
  );
}

 export default Display;
