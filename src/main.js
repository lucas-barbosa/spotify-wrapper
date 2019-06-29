export function search({ query, type }) {
  const url = `https://api.spotify.com/v1/search?q=${encodeURI(query)}&type=${encodeURI(type)}`;
  return fetch(url).then(data => data.json());
}

export function searchAlbums(query) {
  return search({ query, type: 'albums' });
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
