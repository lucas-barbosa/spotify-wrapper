import { API_URL } from './config';
import { toJSON } from './utils';

export function getAlbum(id) {
  fetch(`${API_URL}/albums/${id}`).then(toJSON);
}

export function getAlbums(ids) {
  fetch(`${API_URL}/albums?ids=${ids}`).then(toJSON);
}

export function getAlbumTracks(id) {
  fetch(`${API_URL}/albums/${id}/tracks`).then(toJSON);
}
