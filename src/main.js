import { API_URL } from './config';

export function search({ query, type }) {
  const url = `${API_URL}/search?q=${encodeURI(query)}&type=${encodeURI(type)}`;
  return fetch(url).then(data => data.json());
}

export function searchAlbums(query) {
  return search({ query, type: 'album' });
}

export function searchArtists(query) {
  return search({ query, type: 'artist' });
}

export function searchTracks(query) {
  return search({ query, type: 'track' });
}

export function searchPlaylists(query) {
  return search({ query, type: 'playlist' });
}
