import axios from 'axios';
// const axios = require('axios');

export default function fetchUser(username) {
  axios.get(`https://api.github.com/users/${username}`)
  .then((response) => {
    console.log(response.data)
    if (response.statusText === 'OK' || response.status === '200') {
      console.log(`API call success ${response.status} ${response.statusText}`);
      
      let user = response.data;
      user = JSON.parse(user);
      return user;
    } else {
      throw new Error(`Error ${response.status} ${response.statusText}`);
    } 
  })
}

// fetchUser('emabishi')