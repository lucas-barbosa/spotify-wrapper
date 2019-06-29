const api = 'https://api.spotify.com/v1';

function search({ query, type }) {
  const url = `${api}/search?q=${encodeURI(query)}&type=${encodeURI(type)}`;
  return fetch(url).then(data => data.json());
}

function searchAlbums(query) {
  return search({ query, type: 'albums' });
}

function searchArtists(query) {
  return search({ query, type: 'artist' });
}

function searchTracks(query) {
  return search({ query, type: 'track' });
}

function searchPlaylists(query) {
  return search({ query, type: 'playlist' });
}

export {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists,
};
