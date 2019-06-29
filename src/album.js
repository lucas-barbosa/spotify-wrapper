import { API_URL } from './config';

export function getAlbum(id) {
  fetch(`${API_URL}/albums/${id}`).then(data => data.json());
}

export function getAlbums(ids) {
  fetch(`${API_URL}/albums?ids=${ids}`).then(data => data.json());
}

export function getAlbumTracks(id) {
  fetch(`${API_URL}/albums/${id}/tracks`).then(data => data.json());
}
