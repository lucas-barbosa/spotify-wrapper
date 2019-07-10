import album from './album';
import artist from './artist';
import follow from './follow';
import search from './search';
import { API_URL } from './config';
import { toJSON } from './utils';

export default class SpotifyWrapper {
  constructor({ apiURL, token } = {}) {
    this.apiURL = apiURL || API_URL;
    this.token = token;

    this.artist = artist.bind(this)();
    this.album = album.bind(this)();
    this.follow = follow.bind(this)();
    this.search = search.bind(this)();
  }

  request(url, options = {}) {
    const headers = {
      ...options,
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    return fetch(url, headers).then(toJSON);
  }

  delete(url) {
    const headers = {
      method: 'delete',
    };

    return this.request(url, headers);
  }

  put(url, body = {}) {
    const headers = {
      method: 'put',
      body: JSON.stringify(body),
    };

    return this.request(url, headers);
  }
}
