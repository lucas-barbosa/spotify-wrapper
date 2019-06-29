export function getAlbum(id) {
  fetch(`https://api.spotify.com/v1/albums/${id}`);
}

export function getAlbums(ids) {
  fetch(`https://api.spotify.com/v1/albums?ids=${ids}`);
}

export function getAlbumTracks(id) {
  fetch(`https://api.spotify.com/v1/albums/${id}/tracks`);
}
