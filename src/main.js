const api = {
  urlBase: 'https://api.spotify.com',
  version: 'v1',
};

function search({ query, type }) {
  const url = `${api.urlBase}/${api.version}/search?q=${encodeURI(query)}&type=${type}`;
  return fetch(url).then(data => data.json());
}

function searchAlbums() {}

function searchArtists() {}

function searchTracks() {}

function searchPlaylists() {}

export {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists,
};
