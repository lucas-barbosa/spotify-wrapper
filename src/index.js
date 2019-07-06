import album from './album';
import artist from './artist';
import search from './search';
import { API_URL } from './config';
import { toJSON } from './utils';

export default class SpotifyWrapper {
  constructor({ apiURL, token } = {}) {
    this.apiURL = apiURL || API_URL;
    this.token = token;

    this.artist = artist.bind(this)();
    this.album = album.bind(this)();
    this.search = search.bind(this)();
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
