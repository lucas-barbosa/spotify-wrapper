import album from './album';
import search from './search';
import { API_URL } from './config';
import { toJSON } from './utils';

export default class SpotifyWrapper {
  constructor({ apiURL, token } = {}) {
    this.apiURL = apiURL || API_URL;
    this.token = token;

    this.search = search.bind(this)();
    this.album = album.bind(this)();
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    return fetch(url, headers).then(toJSON);
  }
}
