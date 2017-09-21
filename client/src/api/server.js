import axios from 'axios';

export const fetchUser = (username) => {
  return (
    axios
      .get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      )
  );
}
