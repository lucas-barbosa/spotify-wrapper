const api = 'https://api.spotify.com/v1';

function search({ query, type }) {
  const url = `${api}/search?q=${encodeURI(query)}&type=${encodeURI(type)}`;
  return fetch(url).then(data => data.json());
}

function searchAlbums() {}

function searchArtists(artist) {
  const url = `${api}/search?q=${encodeURI(artist)}&type=artist`;
  fetch(url).then(data => data.json());
}

function searchTracks() {}

function searchPlaylists() {}

export {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists,
};
