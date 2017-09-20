import axios from 'axios';
import {defaultUserError} from '../defaultData';

export const fetchUser = (username) => {
  return (
    axios
      .get(
        `https://api.github.com/users/${username}?client_id=aae10265963c19909412
        &client_secret=94a1551edaedc85e7b70ebb58045eff530e7c99f`
      )
  );
}
