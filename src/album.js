export function getAlbum(id) {
  fetch(`https://api.spotify.com/v1/albums/${id}`);
}

export function getAlbumTracks(id) {
  fetch(`https://api.spotify.com/v1/albums/${id}/tracks`);
}
