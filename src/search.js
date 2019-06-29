import { API_URL } from './config';
import { toJSON } from './utils';

export default function search() {
  return {
    generic: searcher.bind(this),
    albums: searcher.bind(this, 'album'),
    artists: searcher.bind(this, 'artist'),
    playlists: searcher.bind(this, 'playlist'),
    tracks: searcher.bind(this, 'track'),
  };
}

export function searcher(type, query) {
  const url = `${this.apiURL}/search?q=${encodeURI(query)}&type=${encodeURI(type)}`;
  return this.request(url);
}
